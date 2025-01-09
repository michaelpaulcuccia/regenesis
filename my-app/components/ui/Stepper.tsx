import React from "react";

interface StepperProps {
  steps: string[];
  activeStep: string;
  onStepChange: (step: string) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepChange,
}) => {
  return (
    <div className="flex justify-center space-x-8 my-4">
      {steps.map((step, index) => (
        <button
          key={index}
          onClick={() => onStepChange(step)}
          className={`text-center font-medium transition-transform duration-300 ${
            step === activeStep
              ? "text-blue-600 text-xl font-bold transform scale-110"
              : "text-gray-500"
          }`}
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default Stepper;
