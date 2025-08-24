import {
  JOB_NAME_FIELD_NAME,
  PROGRAMMING_SKILLS_FIELD_NAME,
} from "@/app/features/complex-form/constants/formFieldsNames";
import z from "zod";

export const ProgrammingSkillLibrarySchema = z
  .string()
  .min(1, "Veuillez renseigner le nom de la librairie");
export type ProgrammingSkillLibraryType = z.infer<
  typeof ProgrammingSkillLibrarySchema
>;

export const ProgrammingSkillSchema = z.object({
  name: z.string(),
  libraries: z.array(ProgrammingSkillLibrarySchema),
});
export type ProgrammingSkillType = z.infer<typeof ProgrammingSkillSchema>;

export const ComplexFormSchema = z.object({
  [JOB_NAME_FIELD_NAME]: z.string().min(1, "Ce champ est obligatoire"),
  [PROGRAMMING_SKILLS_FIELD_NAME]: z.array(ProgrammingSkillSchema),
});

export type ComplexFormType = z.infer<typeof ComplexFormSchema>;
