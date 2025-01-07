"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import PageContainer from "@components/ui/PageContainer";
import ButtonWrapper from "@components/ui/ButtonWrapper";
import { useUser } from "context/UserContext";

const MyForm = () => {
  const { signUp } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(username, email, password);
    router.push("/enrollment");
  };

  return (
    <PageContainer>
      <Card selfCentered={true}>
        <form
          onSubmit={handleSubmit}
          //onReset={handleReset}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            required={true}
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            required={true}
            minLength={6}
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonWrapper>
            <Button text="Submit" type="submit" color="secondary" />
            {/* <Button text="Reset Form" type="reset" color="success" /> */}
          </ButtonWrapper>
        </form>
      </Card>
    </PageContainer>
  );
};

export default MyForm;
