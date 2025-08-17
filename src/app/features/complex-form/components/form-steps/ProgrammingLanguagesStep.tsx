import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  HiCheck,
  HiOutlineTrash,
  HiOutlineXCircle,
  HiPlus,
  HiXCircle,
  HiXMark,
} from "react-icons/hi2";

const ProgrammingLanguagesStep = () => {
  const [showLanguagesSelect, setShowLanguagesSelect] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(["JavaScript"]);
  const [isLanguagesSelectOpen, setIsLanguagesSelectOpen] = useState(false);

  const notSelectedLanguages = ["C++", "Java", "JavaScript"].filter(
    (language) => !selectedLanguages.includes(language)
  );

  const displayLanguagesSelect = (show: boolean) => {
    setShowLanguagesSelect(show);
    // open automatically the select
    setIsLanguagesSelectOpen(show);
  };

  const addToSelectedLanguage = (value: string) => {
    setSelectedLanguages((prev) => [...prev, value]);
  };

  const deleteLanguage = (languageToDelete: string) => {
    setSelectedLanguages((prev) =>
      prev.filter((language) => languageToDelete !== language)
    );
  };

  const handleClickAddLanguage = () => {
    displayLanguagesSelect(true);
  };

  const handleSelectProgrammingLanguage = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    addToSelectedLanguage(e.target.value);
    displayLanguagesSelect(false);
  };

  const showAddProgrammingLanguageButton =
    !showLanguagesSelect && !(selectedLanguages.length >= 3);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-bold">Compétences en programmation</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {selectedLanguages.map((language) => (
            <ProgrammingSkillCard
              language={language}
              key={language}
              deleteLanguage={deleteLanguage}
            />
          ))}
          {showAddProgrammingLanguageButton ? (
            <Button
              color="primary"
              startContent={<HiPlus />}
              onPress={handleClickAddLanguage}
            >
              Ajouter une compétence
            </Button>
          ) : null}
          {showLanguagesSelect ? (
            <>
              <Select
                label="Langage"
                onChange={handleSelectProgrammingLanguage}
                isOpen={isLanguagesSelectOpen}
                onOpenChange={(open) => {
                  // default select open/close behavior.
                  return (
                    open !== isLanguagesSelectOpen &&
                    setIsLanguagesSelectOpen(open)
                  );
                }}
              >
                {notSelectedLanguages.map((language) => (
                  <SelectItem key={language}>{language}</SelectItem>
                ))}
              </Select>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguagesStep;

type ProgrammingSkillCardProps = {
  language: string;
  deleteLanguage: (language: string) => void;
};

const ProgrammingSkillCard = ({
  language,
  deleteLanguage,
}: ProgrammingSkillCardProps) => {
  const onDeleteLanguageClick = () => {
    deleteLanguage(language);
  };

  const [showAddLibraryInput, setShowAddLibraryInput] = useState(false);
  const [libraries, setLibraries] = useState(["Tailwind", "MUI", "Next.js"]);
  const [newLibrary, setNewLibrary] = useState("");

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

  return (
    <Card>
      <CardHeader className="flex justify-between pb-0">
        <h3 className="font-semibold pb-0.5">{language}</h3>
        <Button
          isIconOnly
          startContent={<HiXMark />}
          size="sm"
          variant="light"
          onPress={onDeleteLanguageClick}
        />
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
