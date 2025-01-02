"use client";
import { useState } from "react";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleReset = () => {
    setFormData({ username: "", password: "" });
  };

  return (
    <PageContainer>
      <Card selfCentered={true}>
        <form
          onSubmit={handleSubmit}
          onReset={handleReset} //NOT USED
          className="space-y-6"
        >
          <Input
            label="Username"
            type="text"
            required={true}
            minLength={4}
            maxLength={15}
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            required={true}
            minLength={6}
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex justify-end items-end flex-col gap-y-2 mt-4">
            <Button text="Submit Form" type="submit" color="secondary" />
            {/* <Button text="Reset Form" type="reset" color="success" /> */}
          </div>
        </form>
      </Card>
    </PageContainer>
  );
};

export default MyForm;
