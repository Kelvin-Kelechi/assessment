import React from "react";
import OnboardingModal from "./components/Onboarding/OnboardingModal";
import { ThemeProvider } from "./contexts/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <OnboardingModal />
      </div>
    </ThemeProvider>
  );
};

export default App;
