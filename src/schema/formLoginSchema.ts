import {z} from "zod";

export const formLoginSchema = z.object({
    email: z.string().min(1,"O E-mail é obrigatorio.").email("Forneça um email valido!"),
    password: z.string().min(1,"A senha é obrigatorio."),
});

export type TFormLoginValues = z.infer<typeof formLoginSchema>;