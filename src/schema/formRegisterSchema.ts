import { z } from "zod";
import { validate } from "cpf-check";

const isValidCPF = (cpf: string): boolean => {
  return validate(cpf);
};

// Updated isValidPhone function to check for valid phone numbers
const isValidPhone = (contact: string): boolean => {
  // Regular expression for a valid phone number
  return /^\+?\d{8,14}$/.test(contact);
};

export const formRegisterSchema = z
  .object({
    firstName: z.string().min(1, "O primeiro nome é obrigatório."),
    lastName: z.string().min(1, "O sobrenome é obrigatório."),
    email: z
      .string()
      .min(1, "O E-mail é obrigatório.")
      .email("Forneça um email válido!"),
    cpf: z
      .string()
      .min(1, "O CPF é obrigatório.")
      .refine((cpf) => isValidCPF(cpf), {
        message: "CPF inválido",
      }),
    contact: z
      .string()
      .min(1, "O telefone de contato é obrigatório.")
      .refine((contact) => isValidPhone(contact), {
        message: "Número de telefone inválido. Forneça um número válido.",
      }),
    nationality: z
      .string()
      .min(1, "A nacionalidade é obrigatória.")
      .refine((value) => value.trim() !== "", {
        message: "A nacionalidade não pode estar vazia.",
      }),
    password: z
      .string()
      .min(8, "A senha precisa conter pelo menos 8 caracteres.")
      .regex(/(?=.?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .regex(/(?=.?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .regex(/(?=.?[!@#$%^&])/, "É necessário pelo menos uma letra especial."),
    confirm: z.string().min(1, "Confirmar senha é obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirm"],
  });

export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
