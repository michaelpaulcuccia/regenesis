"use client";
import { useState } from "react";
import { useUser } from "context/UserContext";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";

type TermsViewProps = {
  onBack: () => void;
  onNext: () => void;
};

const TermsView: React.FC<TermsViewProps> = ({ onBack, onNext }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const { updateEnrollment } = useUser();

  const handleNext = () => {
    if (isAccepted) {
      updateEnrollment();
      onNext();
    } else {
      alert("Please accept the Terms of Use before proceeding.");
    }
  };

  const handleCheckboxChange = () => {
    setIsAccepted((prev) => !prev);
  };

  return (
    <Card selfCentered>
      <h2 className="text-lg font-semibold mb-4">Terms of Use</h2>
      <p>Effective Date: The moment you start reading this, obviously.</p>
      <br />
      <p>
        Welcome, esteemed user, to the wild, wonderful, and questionably
        organized world of my app. By continuing to use this service, you
        acknowledge that you've either read, skimmed, or ignored these Terms
        completely—and we're fine with that as long as you don't blame us later.
      </p>
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="acceptTerms"
            value="accepted"
            checked={isAccepted}
            onChange={handleCheckboxChange}
            //onChange={() => setIsAccepted(true)}
            className="mr-2"
          />
          I accept the Terms of Use
        </label>
      </div>
      <div className="flex justify-between mt-6">
        <Button text="Back" color="secondary" type="button" onClick={onBack} />
        <Button
          text="Next"
          color="primary"
          type="button"
          onClick={handleNext}
        />
      </div>
    </Card>
  );
};

export default TermsView;
