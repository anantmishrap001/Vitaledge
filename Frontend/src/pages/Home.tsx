import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/doctorpic.jpg')", // <<< your new image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.3, // make it little transparent for text readability
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Health Journey Starts Here
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get instant preliminary diagnosis and connect with the right healthcare professionals.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/symptom-checker">Check Symptoms</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/find-doctor">Find a Doctor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How VitalEdge Helps You</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transform transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>Quick Diagnosis</CardTitle>
                <CardDescription>
                  Get instant preliminary diagnosis based on your symptoms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                  alt="Quick Diagnosis"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </CardContent>
            </Card>

            <Card className="transform transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>Find Doctors</CardTitle>
                <CardDescription>
                  Connect with healthcare professionals near you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
                  alt="Find Doctors"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="About VitalEdge"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About VitalEdge</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to VitalEdge — your trusted companion in taking the first step toward better health. At VitalEdge, we have built a platform where you can easily input your symptoms and receive an intelligent, preliminary diagnosis designed to guide you toward the right care.
                </p>
                <p>
                  We are a passionate team of innovators from the Symbiosis Institute of Technology, driven by a vision to make healthcare more accessible, efficient, and user-friendly. Combining our technical expertise with a deep commitment to healthcare innovation, we strive to make VitalEdge a reliable bridge between early diagnosis and professional medical treatment.
                </p>
                <p>
                  At VitalEdge, we believe that quick access to the right medical guidance can change lives. Our journey has just begun, and we are dedicated to continuously evolving, learning, and building a healthier tomorrow — with you at the center of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join VitalEdge today and get instant access to our symptom checker and healthcare professional network.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
