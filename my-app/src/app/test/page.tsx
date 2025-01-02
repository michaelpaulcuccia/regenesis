"use client";
import { useState } from "react";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";
import ButtonWrapper from "@components/ui/ButtonWrapper";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    console.log("Form Data Submitted:", formData);
  };

  const handleReset = () => {
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <PageContainer>
      <Card selfCentered={true}>
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
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
            label="Email"
            type="email"
            required={true}
            placeholder="Enter your email"
            name="email"
            value={formData.email}
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
          <ButtonWrapper>
            <Button text="Submit Form" type="submit" color="secondary" />
            {/* <Button text="Reset Form" type="reset" color="success" /> */}
          </ButtonWrapper>
        </form>
      </Card>
    </PageContainer>
  );
};

export default MyForm;
