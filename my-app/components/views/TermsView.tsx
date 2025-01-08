"use client";

import Button from "@components/ui/Button";
import Card from "@components/ui/Card";

type TermsViewProps = {
  onBack: () => void;
};

const TermsView: React.FC<TermsViewProps> = ({ onBack }) => {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Terms of Use</h2>
      <p>Terms of use form goes here...</p>
      <Button text="Back" color="secondary" type="button" onClick={onBack} />
    </Card>
  );
};

export default TermsView;
