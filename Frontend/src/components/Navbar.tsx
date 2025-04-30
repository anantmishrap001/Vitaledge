
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">VitalEdge</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/symptom-checker" className="text-gray-700 hover:text-primary transition-colors">
              Symptom Checker
            </Link>
            <Link to="/find-doctor" className="text-gray-700 hover:text-primary transition-colors">
              Find Doctor
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-primary transition-colors">
              Team
            </Link>
            <Link to="/login" className="text-white bg-primary hover:bg-secondary px-4 py-2 rounded-md transition-colors">
              Login
            </Link>
       
            <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
