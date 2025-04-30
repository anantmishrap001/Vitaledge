import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const FindDoctor = () => {
  const [location, setLocation] = useState("");
  const [doctors, setDoctors] = useState<{ id: number; specialty: string; distance: string; image: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDoctors([
      {
        id: 1,
        specialty: "General Physician",
        distance: "0.5 km",
        image: "/doctors/doctor1.jpg",
      },
      {
        id: 2,
        specialty: "Cardiologist",
        distance: "1.2 km",
        image: "/doctors/doctor2.jpg",
      },
      {
        id: 3,
        specialty: "Pediatrician",
        distance: "2.0 km",
        image: "/doctors/doctor3.jpg",
      },
    ]);
  };

  const topHospitals = [
    { name: "AIIMS Delhi", link: "https://www.aiims.edu/en.html" },
    { name: "Apollo Hospitals", link: "https://www.apollohospitals.com/" },
    { name: "Fortis Healthcare", link: "https://www.fortishealthcare.com/" },
    { name: "Medanta", link: "https://www.medanta.org/" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: "url('/assets/images.jpg')", // your background image path
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-indigo-700">
                  Find Nearby Doctors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Enter your location:
                    </label>
                    <Input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your address or postal code"
                      className="w-full border-2 border-indigo-300"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Search Doctors
                  </Button>
                </form>

                {doctors.length > 0 && (
                  <div className="mt-10 space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Nearby Doctors:
                    </h3>
                    {doctors.map((doctor) => (
                      <motion.div
                        key={doctor.id}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center bg-white p-6 rounded-lg shadow-md border hover:shadow-lg"
                      >
                        <img
                          src={doctor.image}
                          alt="Doctor"
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                        <div className="ml-6">
                          <p className="text-gray-600">{doctor.specialty}</p>
                          <p className="text-sm text-gray-400">
                            Distance: {doctor.distance}
                          </p>
                          <Button
                            variant="outline"
                            className="mt-3 border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                          >
                            Book Appointment
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Top Hospitals in India:
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {topHospitals.map((hospital, idx) => (
                      <a
                        key={idx}
                        href={hospital.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 text-center bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
                      >
                        {hospital.name}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
