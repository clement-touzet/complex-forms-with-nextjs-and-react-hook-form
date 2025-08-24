"use client";
import ProgrammingSkillsStep from "@/app/features/complex-form/components/form-steps/ProgrammingSkillsStep";
import defaultComplexFormValues from "@/app/features/complex-form/constants/defaultFormValues";
import { JOB_NAME_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import {
  ComplexFormSchema,
  ComplexFormType,
} from "@/app/features/complex-form/types/ComplexFormType";
import { Input } from "@heroui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ComplexForm = () => {
  const formMethods = useForm<ComplexFormType>({
    defaultValues: defaultComplexFormValues,
    resolver: zodResolver(ComplexFormSchema),
  });

  const errors = formMethods.formState.errors;
  console.log("errors", errors);
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col justify-start gap-4">
        <Input
          {...formMethods.register(JOB_NAME_FIELD_NAME)}
          label="Nom du métier"
          labelPlacement="outside"
          classNames={{ label: "font-light" }}
          className="max-w-md"
        />
        <ProgrammingSkillsStep />
      </form>
    </FormProvider>
  );
};

export default ComplexForm;
