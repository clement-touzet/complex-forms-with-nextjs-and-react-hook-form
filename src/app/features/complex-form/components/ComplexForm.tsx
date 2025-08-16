"use client";
import ProgrammingLanguagesStep from "@/app/features/complex-form/components/form-steps/ProgrammingLanguagesStep";
import defaultComplexFormValues from "@/app/features/complex-form/constants/defaultComplexFormValues";
import { ComplexFormType } from "@/app/features/complex-form/types/ComplexFormType";
import { Input } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const ComplexForm = (props: Props) => {
  const { register, handleSubmit, formState } = useForm<ComplexFormType>({
    defaultValues: defaultComplexFormValues,
  });
  return (
    <form className="flex flex-col justify-start gap-4">
      <Input
        {...register("name")}
        label="Nom"
        labelPlacement="outside"
        classNames={{ label: "font-light" }}
        className="max-w-md"
      />
      <ProgrammingLanguagesStep />
    </form>
  );
};

export default ComplexForm;
