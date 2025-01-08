"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "context/UserContext";
import CompanyView from "@components/views/CompanyView";
import TermsView from "@components/views/TermsView"; // Placeholder for the next view
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
        <CompanyView onNext={() => navigateTo("TermsView")} />
      )}
      {currentView === "TermsView" && (
        <TermsView onBack={() => navigateTo("CompanyView")} />
      )}
    </PageContainer>
  );
};

export default Page;
