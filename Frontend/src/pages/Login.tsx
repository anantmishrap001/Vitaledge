// pages/Login.tsx
import { SignIn } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <Card className="w-full max-w-md bg-white dark:bg-black/80 backdrop-blur-md shadow-lg hover:shadow-purple-300 dark:hover:shadow-purple-800 transform transition duration-300 hover:scale-105 border border-purple-100 dark:border-purple-500">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-purple-800 dark:text-purple-300">
            Sign in to VitalEdge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignIn path="/login" routing="path" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
