import { useState, useEffect } from "react";
import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2AccountSetup from "./Step2AccountSetup";
import Step3Preferences from "./Step3Preferences";
import StepTabs from "./StepTabs";
import FormNavigation from "./FormNavigation";
import { AnimatePresence, motion } from "framer-motion";

interface Step {
  id: number;
  name: string;
}

interface FormData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  theme: "Light" | "Dark";
  newsletter: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const steps: Step[] = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Account Setup" },
  { id: 3, name: "Preferences" },
];

const OnboardingModal = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    theme: "Dark", // Changed default to Dark
    newsletter: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    console.log("Applying theme:", formData.theme);

    if (formData.theme === "Dark") {
      root.classList.add("dark");
      body.classList.add("dark");
      console.log("Dark mode activated");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      console.log("Light mode activated");
    }
  }, [formData.theme]);

  // Initialize dark mode on component mount
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.add("dark");
    body.classList.add("dark");
  }, []);

  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};
    if (currentStep === 1) {
      if (!formData.fullName) newErrors.fullName = "Required";
      if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    } else if (currentStep === 2) {
      if (!formData.username) newErrors.username = "Required";
      if (formData.password.length < 6) newErrors.password = "Min 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form submitted:\n" + JSON.stringify(formData, null, 2));
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Account Setup";
      case 3:
        return "Preferences";
      default:
        return "";
    }
  };

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 1:
        return "Please provide your basic information to get started.";
      case 2:
        return "Create your account credentials for secure access.";
      case 3:
        return "Customize your experience with these preferences.";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-lg p-8 relative">
        <StepTabs steps={steps} currentStep={currentStep} />

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {getStepTitle()}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {getStepSubtitle()}
          </p>

          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Step1PersonalInfo
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                  />
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Step2AccountSetup
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                  />
                </motion.div>
              )}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Step3Preferences
                    formData={formData}
                    setFormData={setFormData}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <FormNavigation
          currentStep={currentStep}
          totalSteps={steps.length}
          onBack={handleBack}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default OnboardingModal;
