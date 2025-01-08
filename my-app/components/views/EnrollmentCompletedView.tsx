"use client";
import Card from "@components/ui/Card";
import { useUser } from "context/UserContext";

const EnrollmentCompletedView: React.FC = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <Card selfCentered>
      <h2 className="text-lg font-semibold mb-4">Enrollment Complete</h2>
      <p>Thank you for enrolling! Your submission has been received.</p>
    </Card>
  );
};

export default EnrollmentCompletedView;
