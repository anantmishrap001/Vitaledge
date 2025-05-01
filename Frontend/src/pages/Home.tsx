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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-black dark:to-zinc-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center dark:bg-black transition-colors">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/doctorpic.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0 dark:bg-black/60" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Your Health Journey Starts Here
          </h1>
          <p className="text-xl text-purple-100 dark:text-purple-300 mb-8 drop-shadow-md">
            Get instant preliminary diagnosis and connect with the right healthcare professionals.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <Link to="/symptom-checker">Check Symptoms</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-700 text-purple-700 hover:bg-purple-100 dark:border-purple-300 dark:text-purple-300 dark:hover:bg-purple-900 transition-all hover:scale-105"
            >
              <Link to="/find-doctor">Find a Doctor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-zinc-900 transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800 dark:text-purple-300">
            How VitalEdge Helps You
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transform transition-all hover:scale-105 hover:shadow-xl dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-300">Quick Diagnosis</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
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

            <Card className="transform transition-all hover:scale-105 hover:shadow-xl dark:bg-zinc-800">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-300">Find Doctors</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
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
      <section className="py-20 bg-white dark:bg-zinc-900 transition-colors">
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
              <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">About VitalEdge</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Welcome to VitalEdge — your trusted companion in taking the first step toward better health.
                  At VitalEdge, we have built a platform where you can easily input your symptoms and receive
                  an intelligent, preliminary diagnosis designed to guide you toward the right care.
                </p>
                <p>
                  We are a passionate team of innovators from the Symbiosis Institute of Technology, driven by a
                  vision to make healthcare more accessible, efficient, and user-friendly.
                </p>
                <p>
                  Our journey has just begun, and we are dedicated to continuously evolving, learning,
                  and building a healthier tomorrow — with you at the center of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-black transition-colors">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-900 dark:text-purple-200">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join VitalEdge today and get instant access to our symptom checker and healthcare professional network.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
