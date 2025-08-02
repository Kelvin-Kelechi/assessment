import React from "react";

import { IoChevronForwardSharp } from "react-icons/io5";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit,
}) => (
  <div className="mt-8 space-y-3">
    {currentStep < totalSteps ? (
      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        Continue
        <IoChevronForwardSharp className="w-4 h-4 ml-2" />
      </button>
    ) : (
      <button
        onClick={onSubmit}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        Complete Setup
        <IoChevronForwardSharp className="w-4 h-4 ml-2" />
      </button>
    )}

    {currentStep > 1 && (
      <button
        onClick={onBack}
        className="w-full text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
      >
        Back
      </button>
    )}
  </div>
);

export default FormNavigation;
