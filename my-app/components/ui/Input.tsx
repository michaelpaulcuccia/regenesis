import React from "react";

type InputProps = {
  label: string;
  type: "text" | "password" | "email" | "number";
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  name: string; // This should be required and match the name in the form state
  value: string; // The value prop should always be required in a controlled input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Type for input change event
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  required = false,
  minLength,
  maxLength,
  placeholder = "",
  value,
  name,
  onChange,
}) => {
  return (
    <div className="flex flex-row items-center space-x-6 mb-2 mt-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name} // Use the name prop for id as well for better accessibility
        name={name} // Ensure the name matches the key in formData
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        className="px-2 py-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
