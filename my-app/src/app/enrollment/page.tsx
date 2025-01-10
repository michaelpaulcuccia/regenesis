"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "context/UserContext";
import Stepper from "@components/ui/Stepper"; // Import the Stepper component
import CompanyView from "@components/views/CompanyView";
import CompanyUsers from "@components/views/CompanyUsers";
import TermsView from "@components/views/TermsView";
import EnrollmentCompletedView from "@components/views/EnrollmentCompletedView";
import PageContainer from "@components/ui/PageContainer";

const steps = [
  "1. Create Company",
  "2. Add Users",
  "3. Terms of Use",
  "4. Completed",
];

const Page = () => {
  const { user } = useUser();
  const [currentView, setCurrentView] = useState("CompanyView");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/restricted");
    }
  }, [user, router]);

  if (!user) {
    return (
      <PageContainer>
        <p className="text-center text-red-500">
          Restricted Access: Please sign up or log in.
        </p>
      </PageContainer>
    );
  }

  const navigateTo = (view: string) => {
    setCurrentView(view);
  };

  const getCurrentStep = () => {
    switch (currentView) {
      case "CompanyView":
        return "1. Create Company";
      case "CompanyUsers":
        return "2. Add Users";
      case "TermsView":
        return "3. Terms of Use";
      case "EnrollmentCompletedView":
        return "4. Completed";
      default:
        return "";
    }
  };

  return (
    <PageContainer>
      <Stepper
        steps={steps}
        activeStep={getCurrentStep()}
        onStepChange={(step) => {
          if (step === "1. Create Company") {
            navigateTo("CompanyView");
          } else if (step === "2. Add Users") {
            navigateTo("CompanyUsers");
          } else if (step === "3. Terms of Use") {
            navigateTo("TermsView");
          } else if (step === "4. Completed") {
            navigateTo("EnrollmentCompletedView");
          }
        }}
      />
      {currentView === "CompanyView" && (
        <CompanyView onNext={() => navigateTo("CompanyUsers")} />
      )}
      {currentView === "CompanyUsers" && (
        <CompanyUsers
          onNext={() => navigateTo("TermsView")}
          onBack={() => navigateTo("CompanyView")}
        />
      )}
      {currentView === "TermsView" && (
        <TermsView
          onBack={() => navigateTo("CompanyUsers")}
          onNext={() => navigateTo("EnrollmentCompletedView")}
        />
      )}
      {currentView === "EnrollmentCompletedView" && <EnrollmentCompletedView />}
    </PageContainer>
  );
};

export default Page;
