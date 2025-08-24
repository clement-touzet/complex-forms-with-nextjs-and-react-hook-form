import ProgrammingSkillsCards from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillsCards";
import ProgrammingSkillsSelect from "@/app/features/complex-form/components/form-steps/programming-skills/ProgrammingSkillsSelect";
import { PROGRAMMING_SKILLS_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
import { ComplexFormType } from "@/app/features/complex-form/types/ComplexFormType";
import { Button, SelectItem } from "@heroui/react";
import React, { useMemo, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";

const PROGRAMMING_SKILLS = ["C++", "Java", "JavaScript"];

const ProgrammingSkillsStep = () => {
  const [showSkillsSelect, setShowSkillsSelect] = useState(false);
  const [isSkillsSelectOpen, setIsSkillsSelectOpen] = useState(false);

  const {
    fields: selectedSkills,
    append: addSkill,
    remove: deleteSkill,
    update: updateSkill,
  } = useFieldArray<ComplexFormType>({
    name: PROGRAMMING_SKILLS_FIELD_NAME,
  });

  const notSelectedSkills = useMemo(
    () =>
      PROGRAMMING_SKILLS.filter(
        (skill) =>
          !selectedSkills.find((selectedSkill) => selectedSkill.name === skill)
      ),
    [selectedSkills]
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
    addSkill({ name: event.target.value, libraries: [] });
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
          <ProgrammingSkillsCards
            selectedSkills={selectedSkills}
            deleteSkillByIndex={deleteSkill}
            updateSkill={updateSkill}
          />

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
