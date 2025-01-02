"use client";
import { useState } from "react";
import Input from "@components/ui/Input"; // Assuming Input component is in the 'components/ui' folder
import Button from "@components/ui/Button"; // Assuming Button component is in the 'components/ui' folder

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
    // Here you can handle the form submission, like sending the data to an API or validating the data.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      <Button text="Submit Form" type="submit" color="secondary" />
    </form>
  );
};

export default MyForm;
