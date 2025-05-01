// App.tsx
import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Team from "./pages/Team";
import SymptomChecker from "./pages/SymptomChecker";
import FindDoctor from "./pages/FindDoctor";
import NotFound from "./pages/NotFound";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-purple-200 transition-colors duration-500">


        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/find-doctor" element={<FindDoctor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
