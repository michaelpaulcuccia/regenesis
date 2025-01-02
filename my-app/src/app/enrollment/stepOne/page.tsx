"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // for navigation
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";
import { useUser } from "context/UserContext";

const StepOne = () => {
  const { user, addUserToCompany, completeScreen } = useUser();
  const [companyName, setCompanyName] = useState<string>("");
  const router = useRouter();

  if (!user) {
    // Redirect if the user is not logged in (should not happen in reality)
    router.push("/");
    return null;
  }

  console.log(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add company name and complete screen 1
    addUserToCompany(user.username, user.email, user.password);

    completeScreen("screen1");

    router.push("/enrollment/stepTwo");
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
