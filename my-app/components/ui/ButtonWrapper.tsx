import React from "react";

interface ButtonWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex justify-end items-end flex-col gap-y-2 mt-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
