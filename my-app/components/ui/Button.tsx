"use client";
import React from "react";
import Link from "next/link";

type ButtonProps = {
  text: string; // Button Text
  color?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset"; // HTML button types
  /*
    type="button"
    This is the default button type. A button of this type will not trigger form submission when it is clicked.
    Use case: It's most often used for custom actions that do not relate to form submission. For example, you might have a button that opens a modal, triggers some custom JavaScript logic, or executes other non-form-related behavior.
    type="submit"
    This type is specifically for buttons within a form. When clicked, it will submit the form data to the server, or trigger form submission (depending on how the form is handled in your app, e.g., using a submit event). 
    type="reset"
    This button type resets all form fields to their default values when clicked.
*/
  href?: string; // If provided, makes the button function as a link
  onClick?: () => void; // Click handler for any actions
  disabled?: boolean; // Disables the button
};

const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  type = "button",
  href,
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-[16px] font-semibold focus:outline-none focus:ring-2 transition-all";

  const colorStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  if (href) {
    return (
      <Link href={href} className="inline-block ">
        <div
          className={`${baseStyles} ${colorStyles[color]} ${
            disabled && "opacity-50 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (disabled) e.preventDefault();
            if (onClick) onClick();
          }}
        >
          {text}
        </div>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${colorStyles[color]} ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
