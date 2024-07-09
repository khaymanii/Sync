import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <div className="my-20 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold pb-4 tracking-wider">
          Efficiency and Productivity <br /> with Our{" "}
          <span className="text-customPurple">SaaS</span> Solution
        </h1>
        <p className="text-xs pb-6">
          At Sync, we strive to grow with your business, allowing themes to add
          new projects <br /> and users effortlessly. Tools to ensure that the
          product can adapt to meet business enterprise
        </p>
        <Button
          as={Link}
          radius="full"
          href="#"
          size="md"
          className="text-white bg-customPurple text-xs px-4"
        >
          Get Started Here
        </Button>
      </div>
    </div>
  );
}
