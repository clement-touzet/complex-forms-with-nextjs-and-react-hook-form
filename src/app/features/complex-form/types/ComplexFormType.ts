import {
  JOB_NAME_FIELD_NAME,
  PROGRAMMING_SKILLS_FIELD_NAME,
} from "@/app/features/complex-form/constants/formFieldsNames";
import z from "zod";

export const ComplexFormSchema = z.object({
  [JOB_NAME_FIELD_NAME]: z.string().min(1, "This string is required"),
  [PROGRAMMING_SKILLS_FIELD_NAME]: z.array(z.string()),
});

export type ComplexFormType = z.infer<typeof ComplexFormSchema>;
