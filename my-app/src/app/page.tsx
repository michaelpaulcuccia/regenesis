"use client";
import React from "react";
import Button from "@components/ui/Button";

export default function page() {
  return (
    <div>
      <Button text="Go to Test Page" href="/test" color="primary" />
      <br />
      <Button text="Submit Form" type="submit" color="secondary" />
      <br />
      <Button
        text="Delete Item"
        onClick={() => alert("Item deleted")}
        color="danger"
      />
    </div>
  );
}
