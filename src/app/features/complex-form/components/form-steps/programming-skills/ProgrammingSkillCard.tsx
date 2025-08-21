import { PROGRAMMING_SKILLS_FIELD_NAME } from "@/app/features/complex-form/constants/formFieldsNames";
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
import { useFieldArray } from "react-hook-form";
import { HiXMark, HiPlus } from "react-icons/hi2";

type ProgrammingSkillCardProps = {
  skill: string;
  onDeleteSkill: () => void;
};

const ProgrammingSkillCard = ({
  skill,
  onDeleteSkill,
}: ProgrammingSkillCardProps) => {
  const onDeleteLanguageClick = () => {
    onDeleteSkill();
  };

  const [showAddLibraryInput, setShowAddLibraryInput] = useState(false);
  const [libraries, setLibraries] = useState(["Tailwind", "MUI", "Next.js"]);
  const [newLibrary, setNewLibrary] = useState("");
  const [showDeleteCard, setShowDeleteCard] = useState(false);

  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showAddLibraryInput) refInput.current?.focus();
  }, [showAddLibraryInput]);

  const showAddLibraryButton = !showAddLibraryInput;

  const addLibrary = () => {
    setLibraries((prev) => [...prev, newLibrary]);
    resetNewLibrary();
  };

  const resetNewLibrary = () => {
    setNewLibrary("");
  };

  const hideAddLibraryInput = () => {
    setShowAddLibraryInput(false);
  };

  const onClickAddLibrary = () => {
    setShowAddLibraryInput(true);
  };

  const handleCancelAddLibrary = () => {
    hideAddLibraryInput();
  };

  const handleAddNewLibrary = () => {
    addLibrary();
    hideAddLibraryInput();
  };

  const handleDeleteLibrary = (libraryToDelete: string) => {
    setLibraries((prev) =>
      prev.filter((library) => libraryToDelete !== library)
    );
  };

  const handleChangeNewLibrary = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewLibrary(event.target.value);
  };

  const handleMouseEnterCard = () => {
    setShowDeleteCard(true);
  };

  const handleMouseLeaveCard = () => {
    setShowDeleteCard(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
    >
      <CardHeader className="flex justify-between pb-0 min-h-12">
        <h3 className="font-semibold pb-0.5">{skill}</h3>
        {showDeleteCard ? (
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
          {libraries.map((library) => {
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
          <div className="flex items-center gap-0.5">
            <Button
              size="sm"
              variant="light"
              radius="full"
              isIconOnly
              onPress={handleCancelAddLibrary}
            >
              <HiXMark />
            </Button>
            <ButtonGroup className="justify-start">
              <Input
                // size="sm"
                classNames={{
                  inputWrapper: "rounded-r-none",
                }}
                className="max-w-30"
                placeholder="Biliothèque"
                minLength={1}
                onChange={handleChangeNewLibrary}
                value={newLibrary}
                ref={refInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddNewLibrary();
                  }
                }}
              ></Input>
              <Button
                // size="sm"
                color="primary"
                onPress={handleAddNewLibrary}
              >
                Ajouter
              </Button>
            </ButtonGroup>
          </div>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default ProgrammingSkillCard;
