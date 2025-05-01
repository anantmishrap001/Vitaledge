import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 shadow-lg dark:bg-black dark:border-b dark:border-purple-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-purple-200 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200"
          >
            VitalEdge
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            {[
              { to: "/symptom-checker", label: "Symptom Checker" },
              { to: "/find-doctor", label: "Find Doctor" },
              { to: "/team", label: "Team" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-purple-100 hover:text-white dark:text-purple-400 dark:hover:text-white hover:scale-105 transition-all"
              >
                {item.label}
              </Link>
            ))}

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-purple-100 hover:scale-105 transition-all
                         dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 dark:shadow-md dark:hover:shadow-purple-500/40"
            >
              Login
            </Link>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full text-white hover:text-yellow-300 dark:text-purple-300 dark:hover:text-purple-100 transition-all"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
