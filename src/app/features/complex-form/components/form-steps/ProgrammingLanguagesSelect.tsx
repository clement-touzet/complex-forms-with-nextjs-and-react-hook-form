import { Select, SelectItem, SelectProps } from "@heroui/react";
import React from "react";

type Props = {
  programmingLanguages: string[];
} & SelectProps;

const ProgrammingLanguagesSelect = ({
  programmingLanguages,
  ...rest
}: Props) => {
  return (
    <Select label="Langage" {...rest}>
      {programmingLanguages.map((language) => {
        return <SelectItem key={language}>{language}</SelectItem>;
      })}
    </Select>
  );
};

export default ProgrammingLanguagesSelect;
