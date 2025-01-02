"use client";
import { useRouter } from "next/navigation"; // for navigation
import { useUser } from "context/UserContext";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";

const StepTwo = () => {
  const { user } = useUser();
  const router = useRouter(); // for navigation

  // Ensure user exists
  if (!user) {
    //router.push("/");
    return null;
  }

  // Ensure company name is set
  if (!user.company.companyName) {
    //router.push("/enrollment/stepOne");
    return null; // Exit early if company name is missing
  }

  // Ensure screen1 is completed before allowing access to stepTwo
  if (!user.enrollment.completedScreens.includes("screen1")) {
    //router.push("/enrollment/stepOne");
    return null; // Exit early if screen1 is not completed
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
