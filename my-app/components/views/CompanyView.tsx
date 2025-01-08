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
  const { updateCompanyName, addUserToCompany } = useUser();
  const [companyName, setCompanyName] = useState("");
  const [users, setUsers] = useState([{ username: "", email: "" }]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (companyName.trim()) {
      updateCompanyName(companyName);
    }

    users.forEach((user) => {
      if (user.username.trim() && user.email.trim()) {
        addUserToCompany(user.username, user.email);
      }
    });

    setCompanyName("");
    setUsers([{ username: "", email: "" }]);

    onNext(); // Navigate to the next view
  };

  const handleUserChange = (
    index: number,
    field: "username" | "email",
    value: string
  ) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const addMoreUserFields = () => {
    setUsers([...users, { username: "", email: "" }]);
  };

  const removeUserField = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <Card>
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

        <h3 className="text-md font-medium mb-2">Add Users</h3>
        {users.map((userInput, index) => (
          <div key={index} className="space-y-4 border-b pb-4 mb-4">
            <Input
              label="User Name"
              type="text"
              //required={true}
              placeholder="Enter username"
              name={`username-${index}`}
              value={userInput.username}
              onChange={(e) =>
                handleUserChange(index, "username", e.target.value)
              }
            />
            <Input
              label="Email"
              type="email"
              //required={true}
              placeholder="Enter email"
              name={`email-${index}`}
              value={userInput.email}
              onChange={(e) => handleUserChange(index, "email", e.target.value)}
            />
            <Button
              text="Remove User"
              color="danger"
              type="button"
              onClick={() => removeUserField(index)}
            />
          </div>
        ))}

        <Button
          text="Add More Users"
          color="success"
          type="button"
          onClick={addMoreUserFields}
        />

        <ButtonWrapper>
          <Button text="Next" color="primary" type="submit" />
        </ButtonWrapper>
      </form>
    </Card>
  );
};

export default CompanyView;
