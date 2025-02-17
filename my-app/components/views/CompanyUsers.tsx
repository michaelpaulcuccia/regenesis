"use client";
import { useState } from "react";
import { useUser } from "context/UserContext";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";

type CompanyUsersProps = {
  onNext: () => void;
  onBack: () => void;
};

const CompanyUsers: React.FC<CompanyUsersProps> = ({ onNext, onBack }) => {
  const { user, addUserToCompany, removeUserFromCompany } = useUser();
  const [users, setUsers] = useState([{ username: "", email: "" }]);

  //if usersCompany is stored in context but not in state, update
  const isEmpty = users.every(
    (user) => user.username.trim() === "" && user.email.trim() === ""
  );
  if (user?.company?.usersCompany.length && isEmpty) {
    const updatedUsers = user.company.usersCompany.map((user) => ({
      username: user.username,
      email: user.email,
    }));

    setUsers(updatedUsers);
  }

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
    // Remove the user from the context first
    if (user?.company?.usersCompany[index]) {
      removeUserFromCompany(index);
    }

    //update the state by filtering out the user
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Filter out invalid users and update context
    const validUsers = users.filter(
      (user) => user.username.trim() && user.email.trim()
    );

    if (validUsers.length > 0) {
      addUserToCompany(validUsers);
    }

    onNext();
  };

  return (
    <Card selfCentered>
      <h2 className="text-lg font-semibold mb-4">Add Company Users</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {users.map((userInput, index) => (
          <div key={index} className="space-y-4 border-b pb-4">
            <Input
              label="User Name"
              type="text"
              placeholder="Enter user name"
              name={`username-${index}`}
              value={userInput.username}
              onChange={(e) =>
                handleUserChange(index, "username", e.target.value)
              }
            />
            <Input
              label="Email"
              type="email"
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

        <div
          className="flex flex-row justify-between"
          style={{ marginTop: "48px" }} //TODO: having tailwind.config.ts issues and can't get MT class to show up
        >
          <Button
            text="Back"
            color="secondary"
            type="button"
            onClick={onBack}
          />
          <Button text="Next" color="primary" type="submit" />
        </div>
      </form>
    </Card>
  );
};

export default CompanyUsers;
