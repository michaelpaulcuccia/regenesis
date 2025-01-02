import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  selfCentered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  selfCentered = false,
}) => {
  const cardContent = (
    <div
      className={`rounded-lg border border-gray-300 shadow-md bg-white py-4 px-6 ${className} ${
        selfCentered ? "w-1/2" : ""
      }`}
    >
      {children}
    </div>
  );

  if (selfCentered) {
    return <div className="flex justify-center h-auto">{cardContent}</div>;
  }

  return cardContent;
};

export default Card;
