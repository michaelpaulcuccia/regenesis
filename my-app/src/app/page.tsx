"use client";
import React from "react";
import Button from "@components/ui/Button";
import PageContainer from "@components/ui/PageContainer";

export default function page() {
  return (
    <PageContainer>
      <Button text="Go to Test Page" href="/signup" color="primary" />
    </PageContainer>
  );
}
