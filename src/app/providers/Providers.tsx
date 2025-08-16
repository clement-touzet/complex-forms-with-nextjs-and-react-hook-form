"use client";
import { HeroUIProvider } from "@heroui/react";
import React, { PropsWithChildren } from "react";
import { IconContext } from "react-icons";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <HeroUIProvider>
      <IconContext value={{ size: "18" }}>{children}</IconContext>
    </HeroUIProvider>
  );
};

export default Providers;
