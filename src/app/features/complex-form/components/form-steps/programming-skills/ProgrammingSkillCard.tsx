import AddLibraryInput from "@/app/features/complex-form/components/form-steps/programming-skills/AddLibraryInput";
import {
  ProgrammingSkillLibraryType,
  ProgrammingSkillType,
} from "@/app/features/complex-form/types/ComplexFormType";
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  Chip,
  ButtonGroup,
  Input,
} from "@heroui/react";
import { useState, useRef, useEffect } from "react";
import { HiXMark, HiPlus } from "react-icons/hi2";

type ProgrammingSkillCardProps = {
  skill: ProgrammingSkillType;
  onDeleteSkill: () => void;
  addLibrary: (newLibrary: ProgrammingSkillLibraryType) => void;
  deleteLibrary: (library: ProgrammingSkillLibraryType) => void;
};

const ProgrammingSkillCard = ({
  skill,
  onDeleteSkill,
  addLibrary,
  deleteLibrary,
}: ProgrammingSkillCardProps) => {
  const [showAddLibraryInput, setShowAddLibraryInput] = useState(false);
  const [showDeleteSkillButton, setShowDeleteSkillButton] = useState(false);

  const onDeleteLanguageClick = () => {
    onDeleteSkill();
  };

  const hideAddLibraryInput = () => {
    setShowAddLibraryInput(false);
  };

  const onClickAddLibrary = () => {
    setShowAddLibraryInput(true);
  };

  const cancelAddLibrary = () => {
    hideAddLibraryInput();
  };

  const onAddNewLibrary = (library: ProgrammingSkillLibraryType) => {
    addLibrary(library);
    hideAddLibraryInput();
  };

  const handleDeleteLibrary = (libraryToDelete: string) => {
    deleteLibrary(libraryToDelete);
  };

  const handleMouseEnterCard = () => {
    setShowDeleteSkillButton(true);
  };

  const handleMouseLeaveCard = () => {
    setShowDeleteSkillButton(false);
  };

  const showAddLibraryButton = !showAddLibraryInput;
  return (
    <Card
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
    >
      <CardHeader className="flex justify-between pb-0 min-h-12">
        <h3 className="font-semibold pb-0.5">{skill.name}</h3>
        {showDeleteSkillButton ? (
          <Button
            isIconOnly
            startContent={<HiXMark />}
            size="sm"
            variant="light"
            onPress={onDeleteLanguageClick}
          />
        ) : null}
      </CardHeader>
      <CardBody className="gap-1">
        <div className="flex flex-wrap gap-1">
          {skill.libraries.map((library) => {
            return (
              <Chip
                variant="flat"
                key={library}
                onClose={() => handleDeleteLibrary(library)}
              >
                {library}
              </Chip>
            );
          })}
          {showAddLibraryButton ? (
            <Chip
              className="pl-2 cursor-pointer"
              color="primary"
              startContent={<HiPlus />}
              onClick={onClickAddLibrary}
              variant="light"
            >
              Bibliothèque
            </Chip>
          ) : null}
        </div>
        {showAddLibraryInput ? (
          <AddLibraryInput
            cancelAddLibrary={cancelAddLibrary}
            addLibrary={onAddNewLibrary}
          />
        ) : null}
      </CardBody>
    </Card>
  );
};

export default ProgrammingSkillCard;
