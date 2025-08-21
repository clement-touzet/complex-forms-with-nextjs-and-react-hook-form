import ProgrammingSkillCard from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillCard";
import { PROGRAMMING_SKILLS_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import React from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

type Props = {};

const ProgrammingSkillsCards = (props: Props) => {
  const { remove: removeSkill, fields: selectedSkills } = useFieldArray({
    name: PROGRAMMING_SKILLS_FIELD_NAME,
  });

  return (
    <>
      {selectedSkills.map((skill, index) => {
        const handleDeleteSkill = () => {
          removeSkill(index);
        };
        console.log("skill", skill);
        return null;
        return (
          <ProgrammingSkillCard
            key={skill.id}
            skill={skill}
            onDeleteSkill={handleDeleteSkill}
          />
        );
      })}
    </>
  );
};

export default ProgrammingSkillsCards;
