"use client";
import ProgrammingSkillsStep from "@/app/features/complex-form/components/form-steps/ProgrammingSkillsStep";
import defaultComplexFormValues from "@/app/features/complex-form/constants/defaultFormValues";
import { JOB_NAME_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import { ComplexFormType } from "@/app/features/complex-form/types/ComplexFormType";
import { Input } from "@heroui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const ComplexForm = () => {
  const formMethods = useForm<ComplexFormType>({
    defaultValues: defaultComplexFormValues,
  });
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
