
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  // Check if user has a theme preference in localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      className={`relative p-2 rounded-full transition-colors ${
        isDarkMode ? 'bg-white/10' : 'bg-gray-100'
      } ${className}`}
      onClick={toggleTheme}
    >
      <div className="flex items-center justify-center">
        {isDarkMode ? (
          <Moon className="h-5 w-5 text-purple-300" />
        ) : (
          <Sun className="h-5 w-5 text-amber-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
