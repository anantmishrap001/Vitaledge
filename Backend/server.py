from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('svc.pkl')

# Load datasets
workout = pd.read_csv('datasets/workout.csv')
description = pd.read_csv('datasets/description.csv')
precautions = pd.read_csv('datasets/precautions.csv')
medications = pd.read_csv('datasets/medications.csv')
diets = pd.read_csv('datasets/diets.csv')

# Disease list (same order as used during model training)
disease_list = [
    "Fungal infection", "Allergy", "GERD", "Chronic cholestasis", "Drug Reaction", "Peptic ulcer disease",
    "AIDS", "Diabetes", "Gastroenteritis", "Bronchial Asthma", "Hypertension", "Migraine", "Cervical spondylosis",
    "Paralysis (brain hemorrhage)", "Jaundice", "Malaria", "Chicken pox", "Dengue", "Typhoid", "Hepatitis A",
    "Hepatitis B", "Hepatitis C", "Hepatitis D", "Hepatitis E", "Alcoholic hepatitis", "Tuberculosis",
    "Common Cold", "Pneumonia", "Dimorphic hemmorhoids (piles)", "Heart attack", "Varicose veins", "Hypothyroidism",
    "Hyperthyroidism", "Hypoglycemia", "Osteoarthristis", "Arthritis", "Vertigo (Paroxysmal Positional Vertigo)",
    "Acne", "Urinary tract infection", "Psoriasis", "Impetigo"
]

# Symptom columns (same order as training)
symptom_columns = [
    "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills", "joint_pain",
    "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting", "burning_micturition", "spotting_ urination",
    "fatigue", "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness",
    "lethargy", "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes", "breathlessness",
    "sweating", "dehydration", "indigestion", "headache", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite",
    "pain_behind_the_eyes", "back_pain", "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
    "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach", "swelled_lymph_nodes",
    "malaise", "blurred_and_distorted_vision", "phlegm", "throat_irritation", "redness_of_eyes", "sinus_pressure",
    "runny_nose", "congestion", "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
    "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness", "cramps", "bruising",
    "obesity", "swollen_legs", "swollen_blood_vessels", "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails",
    "swollen_extremeties", "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips", "slurred_speech",
    "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness",
    "spinning_movements", "loss_of_balance", "unsteadiness", "weakness_of_one_body_side", "loss_of_smell",
    "bladder_discomfort", "foul_smell_of urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching",
    "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium", "red_spots_over_body",
    "belly_pain", "abnormal_menstruation", "dischromic _patches", "watering_from_eyes", "increased_appetite",
    "polyuria", "family_history", "mucoid_sputum", "rusty_sputum", "lack_of_concentration", "visual_disturbances",
    "receiving_blood_transfusion", "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen",
    "history_of_alcohol_consumption", "fluid_overload.1", "blood_in_sputum", "prominent_veins_on_calf", "palpitations",
    "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling", "silver_like_dusting",
    "small_dents_in_nails", "inflammatory_nails", "blister", "red_sore_around_nose", "yellow_crust_ooze"
]

# Convert to serializable
def convert_to_serializable(data):
    if isinstance(data, np.ndarray):
        return data.tolist()
    elif isinstance(data, list):
        return [item if isinstance(item, (int, str)) else item.item() for item in data]
    else:
        return str(data)

# Retrieve info
def helper(disease_name):
    disease_name = str(disease_name).strip().lower()

    # Clean column disease names
    description['Disease'] = description['Disease'].str.strip().str.lower()
    precautions['Disease'] = precautions['Disease'].str.strip().str.lower()
    medications['Disease'] = medications['Disease'].str.strip().str.lower()
    diets['Disease'] = diets['Disease'].str.strip().str.lower()
    workout['disease'] = workout['disease'].str.strip().str.lower()

    desc = description[description['Disease'] == disease_name]['Description'].values
    pre = precautions[precautions['Disease'] == disease_name][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']].values
    med = medications[medications['Disease'] == disease_name]['Medication'].dropna().tolist()
    die = diets[diets['Disease'] == disease_name]['Diet'].dropna().tolist()
    wrkout = workout[workout['disease'] == disease_name]['workout'].dropna().tolist()

    # Make all data serializable
    desc = convert_to_serializable(desc)
    pre = convert_to_serializable(pre)
    med = convert_to_serializable(med)
    die = convert_to_serializable(die)
    wrkout = convert_to_serializable(wrkout)

    return {
        "disease": disease_name,
        "description": desc,
        "precautions": pre,
        "medications": med,
        "diet": die,
        "workout": wrkout
    }

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        symptoms = data.get("symptoms", [])
        inputs = [1 if symptom in symptoms else 0 for symptom in symptom_columns]

        prediction_index = model.predict([inputs])[0]
        disease_name = disease_list[prediction_index]

        result = helper(disease_name)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
