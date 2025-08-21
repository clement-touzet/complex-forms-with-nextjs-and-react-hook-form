import {
  JOB_NAME_DEFAULT_VALUES,
  PROGRAMMING_SKILLS_DEFAULT_VALUES,
} from "@/app/features/complex-form/constants/defaultFieldsValues";
import {
  JOB_NAME_FIELD_NAME,
  PROGRAMMING_SKILLS_FIELD_NAME,
} from "@/app/features/complex-form/constants/formFieldsNames";
import { ComplexFormType } from "@/app/features/complex-form/types/ComplexFormType";

const defaultComplexFormValues: ComplexFormType = {
  [JOB_NAME_FIELD_NAME]: JOB_NAME_DEFAULT_VALUES,
  [PROGRAMMING_SKILLS_FIELD_NAME]: PROGRAMMING_SKILLS_DEFAULT_VALUES,
};

export default defaultComplexFormValues;
