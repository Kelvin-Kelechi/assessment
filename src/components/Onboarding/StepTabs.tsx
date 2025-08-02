import React from "react";
import { motion } from "framer-motion";

interface Step {
  id: number;
  name: string;
}

interface StepTabsProps {
  steps: Step[];
  currentStep: number;
}

const StepTabs: React.FC<StepTabsProps> = ({ steps, currentStep }) => (
  <div className="flex flex-col items-center">
    {/* Icon */}
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
      <svg
        className="w-6 h-6 text-blue-600 dark:text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>

    {/* Progress Bar */}
    <div className="w-full flex items-center justify-between mb-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.id <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
              }`}
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{
                scale:
                  step.id === currentStep
                    ? 1.2
                    : step.id <= currentStep
                    ? 1
                    : 0.8,
                rotate: step.id === currentStep ? 360 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.5,
              }}
              whileHover={{
                scale: step.id <= currentStep ? 1.1 : 0.9,
                transition: { duration: 0.2 },
              }}
            >
              {step.id}
            </motion.div>
          </div>
          {index < steps.length - 1 && (
            <motion.div
              className={`flex-1 h-1 mx-2 ${
                step.id < currentStep
                  ? "bg-blue-600"
                  : "bg-gray-200 dark:bg-gray-600"
              }`}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: step.id < currentStep ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.2,
              }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default StepTabs;
