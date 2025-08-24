import { Select, SelectProps } from "@heroui/react";
import React from "react";

type Props = SelectProps;

const ProgrammingSkillsSelect = ({ children, ...rest }: Props) => {
  return (
    <Select label="Compétence" {...rest}>
      {children}
    </Select>
  );
};

export default ProgrammingSkillsSelect;
