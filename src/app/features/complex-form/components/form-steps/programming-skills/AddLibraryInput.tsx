import {
  ProgrammingSkillLibrarySchema,
  ProgrammingSkillLibraryType,
} from "@/app/features/complex-form/types/ComplexFormType";
import { Button, ButtonGroup, Input } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import z, { ZodError } from "zod";

const DEFAULT_LIBRARY_VALUE = "";

type Props = {
  cancelAddLibrary: () => void;
  addLibrary: (library: ProgrammingSkillLibraryType) => void;
};

const AddLibraryInput = ({ cancelAddLibrary, addLibrary }: Props) => {
  const [newLibrary, setNewLibrary] = useState(DEFAULT_LIBRARY_VALUE);
  const [errors, setErrors] = useState<string[]>([]);

  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // on first render (on mount) focus the input
    refInput.current?.focus();
  }, []);

  const resetNewLibrary = () => {
    setNewLibrary(DEFAULT_LIBRARY_VALUE);
  };

  const handleCancelAddLibrary = () => {
    cancelAddLibrary();
  };

  const handleAddNewLibrary = () => {
    const { error, data: parsedLibrary } =
      ProgrammingSkillLibrarySchema.safeParse(newLibrary);
    if (error) {
      const flattenedError = z.flattenError(error);
      console.log("result error", flattenedError);
      setErrors(flattenedError.formErrors);
      return;
    }
    addLibrary(parsedLibrary);
    resetNewLibrary();
  };

  const handleChangeNewLibrary = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewLibrary(event.target.value);
    setErrors([]);
  };

  const isInputInvalid = errors.length > 0;

  return (
    <>
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
            isInvalid={isInputInvalid}
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
      {isInputInvalid ? (
        <div className="text-tiny text-danger">{errors[0]} </div>
      ) : null}
    </>
  );
};

export default AddLibraryInput;
