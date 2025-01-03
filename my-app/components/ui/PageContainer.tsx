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
    <div className={`min-h-screen container mx-auto px-4 py-8 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
