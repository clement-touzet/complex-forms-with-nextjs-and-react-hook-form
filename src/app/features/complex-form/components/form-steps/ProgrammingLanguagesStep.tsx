import ProgrammingLanguagesSelect from "@/app/features/complex-form/components/form-steps/ProgrammingLanguagesSelect";
import { Button, Select, SelectItem } from "@heroui/react";
import React, { ChangeEvent, useState } from "react";
import { HiPlus } from "react-icons/hi2";

const ProgrammingLanguagesStep = () => {
  const [canAddProgrammingLanguage, setCanAddProgrammingLanguage] =
    useState(true);
  const [selectedProgrammingLanguages, setSelectedProgrammingLanguages] =
    useState(["JavaScript"]);
  const [
    isProgrammingLanguagesSelectOpen,
    setIsProgrammingLanguagesSelectOpen,
  ] = useState(false);

  const notSelectedProgrammingLanguages = ["C++", "Java"];

  const handleClickAddLanguage = () => {
    setCanAddProgrammingLanguage(false);
    setIsProgrammingLanguagesSelectOpen(true);
  };

  const handleSelectProgrammingLanguage = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("select", event);
    setCanAddProgrammingLanguage(true);
    setSelectedProgrammingLanguages((prev) => [...prev, event.target.value]);
    setIsProgrammingLanguagesSelectOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-start">
        <h2>Compétences en programmation</h2>
        {selectedProgrammingLanguages.map((language) => (
          <p key={language}>{language}</p>
        ))}

        {canAddProgrammingLanguage ? (
          <Button
            color="primary"
            startContent={<HiPlus />}
            onPress={handleClickAddLanguage}
          >
            Ajouter une compétence
          </Button>
        ) : null}

        {!canAddProgrammingLanguage ? (
          <>
            <Select
              label="Langage"
              onChange={handleSelectProgrammingLanguage}
              isOpen={isProgrammingLanguagesSelectOpen}
            >
              {notSelectedProgrammingLanguages.map((language) => {
                return <SelectItem key={language}>{language}</SelectItem>;
              })}
            </Select>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ProgrammingLanguagesStep;
