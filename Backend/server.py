from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS
import numpy as np


app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Load the trained model
model = joblib.load('svc.pkl')

# Load datasets
workout = pd.read_csv('D:/College 6th sem/PBL/Vitaledge/Backend/datasets/workout.csv')
description = pd.read_csv('D:/College 6th sem/PBL/Vitaledge/Backend/datasets/description.csv')
precautions = pd.read_csv('D:/College 6th sem/PBL/Vitaledge/Backend/datasets/precautions.csv')
medications = pd.read_csv('D:/College 6th sem/PBL/Vitaledge/Backend/datasets/medications.csv')
diets = pd.read_csv('D:/College 6th sem/PBL/Vitaledge/Backend/datasets/diets.csv')

# All symptom columns
symptom_columns = [
    "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills", "joint_pain",
    "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting", "burning_micturition",
    "spotting_urination", "fatigue", "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", "weight_loss",
    "restlessness", "lethargy", "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes",
    "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin", "dark_urine", "nausea",
    "loss_of_appetite", "pain_behind_the_eyes", "back_pain", "constipation", "abdominal_pain", "diarrhoea",
    "mild_fever", "yellow_urine", "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
    "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm", "throat_irritation", "redness_of_eyes",
    "sinus_pressure", "runny_nose", "congestion", "chest_pain", "weakness_in_limbs", "fast_heart_rate",
    "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
    "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels", "puffy_face_and_eyes", "enlarged_thyroid",
    "brittle_nails", "swollen_extremeties", "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
    "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck", "swelling_joints",
    "movement_stiffness", "spinning_movements", "loss_of_balance", "unsteadiness", "weakness_of_one_body_side",
    "loss_of_smell", "bladder_discomfort", "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases",
    "internal_itching", "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium",
    "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches", "watering_from_eyes",
    "increased_appetite", "polyuria", "family_history", "mucoid_sputum", "rusty_sputum", "lack_of_concentration",
    "visual_disturbances", "receiving_blood_transfusion", "receiving_unsterile_injections", "coma", "stomach_bleeding",
    "distention_of_abdomen", "history_of_alcohol_consumption", "fluid_overload.1", "blood_in_sputum",
    "prominent_veins_on_calf", "palpitations", "painful_walking", "pus_filled_pimples", "blackheads", "scurring",
    "skin_peeling", "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails", "blister",
    "red_sore_around_nose", "yellow_crust_ooze"
]
def process_value(x):
    if isinstance(x, str):
        return x.strip()
    else:
        print(f"Non-string value encountered: {x}")
        return str(x)
    
def helper(disease_name):
    disease_name = str(disease_name).strip().lower()

    # Check if disease_name is empty
    if not disease_name:
        return {"error": "Invalid disease name"}

    # Ensure the DataFrames are cleaned (strip spaces)
    description['Disease'] = description['Disease'].str.strip().str.lower()

    # Search for the disease in the description DataFrame
    desc = description[description['Disease'] == disease_name]['Description'].values

    if not desc.size:
        return {"error": f"Description not found for disease: {disease_name}"}

    pre = precautions[precautions['Disease'].str.lower() == disease_name][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']].values
    if not pre.size:
        return {"error": f"Precautions not found for disease: {disease_name}"}

    med = medications[medications['Disease'].str.lower() == disease_name]['Medication'].dropna().tolist()
    if not med:
        return {"error": f"Medications not found for disease: {disease_name}"}

    die = diets[diets['Disease'].str.lower() == disease_name]['Diet'].dropna().tolist()
    if not die:
        return {"error": f"Diets not found for disease: {disease_name}"}

    wrkout = workout[workout['disease'].str.lower() == disease_name]['workout'].dropna().tolist()
    if not wrkout:
        return {"error": f"Workout information not found for disease: {disease_name}"}

    # Convert numpy types to native Python types
    def convert_to_serializable(data):
        if isinstance(data, np.ndarray):
            return [item.item() if isinstance(item, np.int32) else item for item in data]
        elif isinstance(data, list):
            return [item if isinstance(item, (int, str)) else item.item() for item in data]
        else:
            return data.item() if isinstance(data, np.int32) else data
    
    # Apply conversion for each list/array
    desc = convert_to_serializable(desc)
    pre = convert_to_serializable(pre)
    med = convert_to_serializable(med)
    die = convert_to_serializable(die)
    wrkout = convert_to_serializable(wrkout)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("🟢 Incoming Data:", data)

        symptoms = data.get("symptoms", [])
        inputs = [1 if symptom in symptoms else 0 for symptom in symptom_columns]
        print("🧠 Model input vector:", inputs)

        prediction = model.predict([inputs])[0]
        print("🩺 Predicted Disease:", prediction)

        response = helper(prediction)
        return jsonify(response)

    except Exception as e:
        print(f"❌ Backend Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
