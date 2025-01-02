"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";
import { useUser } from "context/UserContext";

const StepOne = () => {
  const { user, updateCompanyName, completeScreen } = useUser();
  const [companyName, setCompanyName] = useState<string>("");
  const router = useRouter();

  if (!user) {
    return null;
  }

  //NOTE: had some issues with the companyName re-rendering so I added a check and useEffect to ensure the state updates properly

  useEffect(() => {
    if (user?.company?.companyName) {
      completeScreen("screen1");
      console.log("Navigating to step two...");
      router.push("/enrollment/stepTwo");
    }
  }, [user?.company?.companyName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Setting company name:", companyName);

    updateCompanyName(companyName);

    if (user?.company?.companyName) {
      updateCompanyName(companyName);
    }
  };

  return (
    <PageContainer>
      <Card selfCentered={true}>
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Company Name"
            type="text"
            required={true}
            placeholder="Enter your company name"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <div className="flex justify-end gap-2 mt-4">
            <Button text="Next" type="submit" color="secondary" />
          </div>
        </form>
      </Card>
    </PageContainer>
  );
};

export default StepOne;
