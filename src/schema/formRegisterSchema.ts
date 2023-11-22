import { z } from 'zod';
import { validate } from 'cpf-check';

const isValidCPF = (cpf: string): boolean => {
  return validate(cpf);
};

export const formRegisterSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  email: z.string().min(1,"O E-mail é obrigatorio.").email("Forneça um email valido!"),
  cpf: z.string().min(1, 'O CPF é obrigatório.').refine((cpf) => isValidCPF(cpf), {
    message: 'CPF inválido',
  }),
  address: z.string().min(1, 'O Endereço é obrigatorio.'),
  password: z.string().min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .regex(/(?=.?[A-Z])/, "E necessario pelo menos uma letra maiuscula.")
    .regex(/(?=.?[a-z])/, "E necessario pelo menos uma letra minuscula.")
    .regex(/(?=.*?[0-9])/, "E necessario pelo menos um numero.")
    .regex(/(?=.?[!@#$%^&])/, "E necessario pelo menos uma letra especial."),
    confirm: z.string().min(1,"Confirmar senha e obrigatorio"),
}).refine(({password, confirm})=> confirm === password, {
    message:"A confirmação e a senha precisão corresponder",
    path: ["confirm"],
});

export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;