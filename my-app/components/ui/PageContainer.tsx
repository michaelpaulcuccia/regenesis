"use client";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`min-h-screen container mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
