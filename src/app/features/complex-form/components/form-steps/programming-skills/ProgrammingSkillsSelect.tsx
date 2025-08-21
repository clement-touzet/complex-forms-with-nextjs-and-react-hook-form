import { PROGRAMMING_SKILLS_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import { Select, SelectProps } from "@heroui/react";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

type Props = SelectProps;

const ProgrammingSkillsSelect = ({ children, onChange, ...rest }: Props) => {
  return (
    <Controller
      name={PROGRAMMING_SKILLS_FIELD_NAME}
      render={({ field }) => {
        return (
          <Select label="Compétence" {...rest}>
            {children}
          </Select>
        );
      }}
    ></Controller>
  );
};

export default ProgrammingSkillsSelect;
