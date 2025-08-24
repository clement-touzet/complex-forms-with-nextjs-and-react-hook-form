import ProgrammingSkillCard from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillCard";
import { PROGRAMMING_SKILLS_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import {
  ProgrammingSkillLibraryType,
  ProgrammingSkillType,
} from "@/app/features/complex-form/types/ComplexFormType";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  selectedSkills: ProgrammingSkillType[];
  deleteSkillByIndex: (skillIndex: number) => void;
  updateSkill: (index: number, newSkill: ProgrammingSkillType) => void;
};

const ProgrammingSkillsCards = ({
  selectedSkills,
  deleteSkillByIndex,
  updateSkill,
}: Props) => {
  const handleDeleteSkill = (index: number) => {
    deleteSkillByIndex(index);
  };

  return (
    <>
      {selectedSkills.map((skillField, index) => {
        const updateLibraries = (libraries: ProgrammingSkillLibraryType[]) => {
          updateSkill(index, {
            ...skillField,
            libraries: libraries,
          });
        };

        const handleAddLibrary = (newLibrary: ProgrammingSkillLibraryType) => {
          const modifiedLibraries = [...skillField.libraries, newLibrary];
          updateLibraries(modifiedLibraries);
        };

        const handleDeleteLibrary = (
          libraryToDelete: ProgrammingSkillLibraryType
        ) => {
          const modifiedLibraries = skillField.libraries.filter(
            (library) => library !== libraryToDelete
          );
          updateLibraries(modifiedLibraries);
        };

        return (
          <ProgrammingSkillCard
            key={skillField.name}
            skill={skillField}
            onDeleteSkill={() => handleDeleteSkill(index)}
            addLibrary={handleAddLibrary}
            deleteLibrary={handleDeleteLibrary}
          />
        );
      })}
    </>
  );
};

export default ProgrammingSkillsCards;
