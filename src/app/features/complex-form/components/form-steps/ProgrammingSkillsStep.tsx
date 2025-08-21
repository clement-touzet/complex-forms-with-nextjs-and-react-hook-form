import ProgrammingSkillCard from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillCard";
import ProgrammingSkillsCards from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillsCards";
import ProgrammingSkillsSelect from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillsSelect";
import { PROGRAMMING_SKILLS_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import { Button, SelectItem } from "@heroui/react";
import React, { ChangeEvent, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";

const ProgrammingSkillsStep = () => {
  const [showSkillsSelect, setShowSkillsSelect] = useState(false);
  const [isSkillsSelectOpen, setIsSkillsSelectOpen] = useState(false);

  const {
    fields: selectedSkills,
    append: addSkill,
    remove: deleteSkill,
  } = useFieldArray({
    name: PROGRAMMING_SKILLS_FIELD_NAME,
  });
  console.log("fields ", selectedSkills);

  const notSelectedSkills = ["C++", "Java", "JavaScript"].filter(
    (skill) => !selectedSkills.includes(skill)
  );

  const displaySkillsSelect = (show: boolean) => {
    setShowSkillsSelect(show);
    // open automatically the select
    setIsSkillsSelectOpen(show);
  };

  const handleClickAddSkill = () => {
    displaySkillsSelect(true);
  };

  const handleSelectSkill = (event: React.ChangeEvent<HTMLSelectElement>) => {
    addSkill(event.target.value);
    displaySkillsSelect(false);
  };

  const showAddSkillButton = !showSkillsSelect && !(selectedSkills.length >= 3);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-bold">Compétences en programmation</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <ProgrammingSkillsCards />

          {showAddSkillButton ? (
            <Button
              color="primary"
              startContent={<HiPlus />}
              onPress={handleClickAddSkill}
            >
              Ajouter une compétence
            </Button>
          ) : null}

          {showSkillsSelect ? (
            <>
              <ProgrammingSkillsSelect
                isOpen={isSkillsSelectOpen}
                onOpenChange={(open) => {
                  // default select open/close behavior.
                  return (
                    open !== isSkillsSelectOpen && setIsSkillsSelectOpen(open)
                  );
                }}
                onChange={handleSelectSkill}
              >
                {notSelectedSkills.map((skill) => {
                  return <SelectItem key={skill}>{skill}</SelectItem>;
                })}
              </ProgrammingSkillsSelect>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProgrammingSkillsStep;
