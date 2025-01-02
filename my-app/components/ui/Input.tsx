import React from "react";

type InputProps = {
  label: string;
  type: "text" | "password" | "email" | "number";
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    <div className="flex flex-col space-y-2 mb-2 mt-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
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
