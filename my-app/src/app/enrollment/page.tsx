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

const steps = ["Create Company", "Add Users", "Terms of Use", "Completed"];

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
        return "Create Company";
      case "CompanyUsers":
        return "Add Users";
      case "TermsView":
        return "Terms of Use";
      case "EnrollmentCompletedView":
        return "Completed";
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
          const stepMap = {
            "Create Company": "CompanyView",
            "Add Users": "CompanyUsers",
            "Terms of Use": "TermsView",
            Completed: "EnrollmentCompletedView",
          };
          navigateTo(stepMap[step]);
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
