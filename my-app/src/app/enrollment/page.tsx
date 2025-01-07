"use client";
import { useState } from "react";
import { useUser } from "context/UserContext";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";

const Page = () => {
  const { updateCompanyName, addUserToCompany, user } = useUser();
  const [companyName, setCompanyName] = useState("");
  const [users, setUsers] = useState([
    { username: "", email: "", password: "" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (companyName.trim()) {
      updateCompanyName(companyName);
    }

    users.forEach((user) => {
      if (user.username.trim() && user.email.trim() && user.password.trim()) {
        addUserToCompany(user.username, user.email, user.password);
      }
    });

    setCompanyName("");
    setUsers([{ username: "", email: "", password: "" }]);
  };

  const handleUserChange = (
    index: number,
    field: "username" | "email" | "password",
    value: string
  ) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const addMoreUserFields = () => {
    setUsers([...users, { username: "", email: "", password: "" }]);
  };

  const removeUserField = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  if (!user) {
    return (
      <PageContainer>
        <Card>
          <p className="text-center text-red-500">
            Restricted Access: Please sign up or log in.
          </p>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
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
            <div key={index} className="space-y-4 border-b pb-4 mb-4 relative">
              <Input
                label={`Username ${index + 1}`}
                type="text"
                required={true}
                placeholder="Enter username"
                name={`username-${index}`}
                value={userInput.username}
                onChange={(e) =>
                  handleUserChange(index, "username", e.target.value)
                }
              />
              <Input
                label={`Email ${index + 1}`}
                type="email"
                required={true}
                placeholder="Enter email"
                name={`email-${index}`}
                value={userInput.email}
                onChange={(e) =>
                  handleUserChange(index, "email", e.target.value)
                }
              />
              <Input
                label={`Password ${index + 1}`}
                type="password"
                required={true}
                placeholder="Enter password"
                name={`password-${index}`}
                value={userInput.password}
                onChange={(e) =>
                  handleUserChange(index, "password", e.target.value)
                }
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

          <Button text="Next" color="primary" type="submit" />
        </form>
      </Card>
    </PageContainer>
  );
};

export default Page;
