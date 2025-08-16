import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Select,
  SelectItem,
} from "@heroui/react";
import React, { ChangeEvent, useState } from "react";
import {
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

  const notSelectedLanguages = ["C++", "Java"].filter(
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
      <div className="  ">
        <h2 className="font-bold pb-2">Compétences en programmation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {selectedLanguages.map((language) => (
            <ProgrammingSkillCard language={language} key={language} />
          ))}
        </div>

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
                console.log("open", open, isLanguagesSelectOpen);
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
    </>
  );
};

export default ProgrammingLanguagesStep;

const ProgrammingSkillCard = ({ language }: { language: string }) => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <h3 className="font-semibold pb-0.5">{language}</h3>
        <Button
          isIconOnly
          startContent={<HiXMark />}
          size="sm"
          variant="light"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap gap-1">
          <Chip
            variant="flat"
            endContent={
              <HiOutlineXCircle className="hover:text-red-500 cursor-pointer" />
            }
          >
            Tailwind
          </Chip>
          <Chip
            className="pl-2 cursor-pointer"
            color="primary"
            startContent={<HiPlus />}
          >
            Bilibothèque
          </Chip>
        </div>
      </CardBody>
    </Card>
  );
};
