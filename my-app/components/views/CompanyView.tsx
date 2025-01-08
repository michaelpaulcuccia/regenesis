"use client";
import { useState } from "react";
import { useUser } from "context/UserContext";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import ButtonWrapper from "@components/ui/ButtonWrapper";

type CompanyViewProps = {
  onNext: () => void;
};

const CompanyView: React.FC<CompanyViewProps> = ({ onNext }) => {
  const { updateCompanyName } = useUser();
  const [companyName, setCompanyName] = useState("");
  const [companyNameHasUpdated, setCompanyNameHasUpdated] = useState(false);

  // Function to handle company name update when "Next" button is pressed
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure company name is entered before proceeding
    if (companyName.trim()) {
      updateCompanyName(companyName); // Update company name in context
      setCompanyNameHasUpdated(true); // Mark as updated
      onNext(); // Proceed to next step
    } else {
      alert("Please enter a Company Name before proceeding.");
    }
  };

  return (
    <Card selfCentered>
      <h2 className="text-lg font-semibold mb-4">Add Company Details</h2>
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

        {/* Only one "Next" button to handle submitting and updating */}
        <ButtonWrapper>
          <Button text="Next" color="primary" type="submit" />
        </ButtonWrapper>
      </form>
    </Card>
  );
};

export default CompanyView;
