"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "context/UserContext";
import CompanyView from "@components/views/CompanyView";
import CompanyUsers from "@components/views/CompanyUsers"; // Import the new CompanyUsers view
import TermsView from "@components/views/TermsView";
import EnrollmentCompletedView from "@components/views/EnrollmentCompletedView";
import PageContainer from "@components/ui/PageContainer";

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

  return (
    <PageContainer>
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
