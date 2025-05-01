import { useState } from "react";
import Select from "react-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, FileBox, Utensils, Shield, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const allSymptoms = [
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
];

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<any[]>([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [diagnosisDetails, setDiagnosisDetails] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSymptoms.length < 3) {
      alert("Please select at least 3 symptoms.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: selectedSymptoms.map(s => s.value) }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setDiagnosis(data.disease || data.predicted_disease);
      setDiagnosisDetails(data);
      setShowResults(true);
    } catch (error: any) {
      console.error("❌ Frontend Fetch Error:", error.message);
      alert("Diagnosis failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-12 px-4" style={{ backgroundImage: "url('/assets/pranavreddy.jpg')" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="mb-10 bg-white/80 backdrop-blur-md shadow-lg">
            <CardHeader className="text-center">
              <h1 className="text-3xl font-bold text-blue-800 drop-shadow-sm">🩺 Symptom Checker</h1>
              <p className="text-gray-700 text-sm mt-2">Select your symptoms to get a preliminary diagnosis</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select at least 3 symptoms:</label>
                  <Select
                    isMulti
                    options={allSymptoms.map(symptom => ({ value: symptom, label: symptom.replace(/_/g, " ") }))}
                    value={selectedSymptoms}
                    onChange={(selected) => setSelectedSymptoms(selected as any[])}
                    className="text-sm"
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-2">🔍 Get Diagnosis</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {showResults && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Card className="bg-white/90 backdrop-blur-md shadow-xl border border-blue-100">
              <CardHeader className="text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg py-6">
                <CardTitle className="text-2xl text-blue-800 font-semibold">
                  🧾 Diagnosis Result: <span className="text-blue-900 underline">{diagnosis}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <TabsTrigger value="description"><FileText className="w-4 h-4 mr-1" /> Description</TabsTrigger>
                    <TabsTrigger value="medication"><FileBox className="w-4 h-4 mr-1" /> Medication</TabsTrigger>
                    <TabsTrigger value="diet"><Utensils className="w-4 h-4 mr-1" /> Diet</TabsTrigger>
                    <TabsTrigger value="precautions"><Shield className="w-4 h-4 mr-1" /> Precautions</TabsTrigger>
                    <TabsTrigger value="workout"><Dumbbell className="w-4 h-4 mr-1" /> Workout</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-4 text-gray-800 text-sm">
                    <p>{Array.isArray(diagnosisDetails.description) ? diagnosisDetails.description.join(" ") : diagnosisDetails.description}</p>
                  </TabsContent>

                  <TabsContent value="medication">
                    <ScrollArea className="h-64 p-4 text-sm">
                      <ul className="list-disc pl-5">
                        {(diagnosisDetails.medications || []).map((m: string, i: number) => <li key={i}>{m}</li>)}
                      </ul>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="diet">
                    <ScrollArea className="h-64 p-4 text-sm">
                      <ul className="list-disc pl-5">
                        {(diagnosisDetails.diet || []).map((d: string, i: number) => <li key={i}>{d}</li>)}
                      </ul>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="precautions">
                    <ScrollArea className="h-64 p-4 text-sm">
                      <ul className="list-disc pl-5">
                        {(diagnosisDetails.precautions || []).map((p: string, i: number) => <li key={i}>{p}</li>)}
                      </ul>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="workout">
                    <ScrollArea className="h-64 p-4 text-sm">
                      <ul className="list-disc pl-5">
                        {(diagnosisDetails.workout || []).map((w: string, i: number) => <li key={i}>{w}</li>)}
                      </ul>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;