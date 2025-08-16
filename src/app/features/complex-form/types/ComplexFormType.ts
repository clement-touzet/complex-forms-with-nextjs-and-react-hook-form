import z from "zod";

export const ComplexFormSchema = z.object({
  name: z.string().min(1, "This string is required"),
});

export type ComplexFormType = z.infer<typeof ComplexFormSchema>;
