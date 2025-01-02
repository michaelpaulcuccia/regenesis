"use client";
import { useRouter } from "next/navigation";
import { useUser } from "context/UserContext";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";

const StepTwo = () => {
  const { user } = useUser();
  const router = useRouter();

  console.log("StepTwo user", user);

  // Ensure a user exists
  if (!user) {
    return null;
  }

  // Ensure screen1 is completed before allowing access to stepTwo
  if (!user.enrollment.completedScreens.includes("screen1")) {
    return null;
  }

  return (
    <PageContainer>
      <Card selfCentered={true}>
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
        <p className="text-lg">
          You are setting up your company: {user.company.companyName}
        </p>
      </Card>
    </PageContainer>
  );
};

export default StepTwo;
