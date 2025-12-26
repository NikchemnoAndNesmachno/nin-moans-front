import { z } from "zod";
import type {Lang} from "../lang/types.ts";

export const createRegisterSchema = (lang: Lang["validation"]) =>
    z.object({
        userName: z.string().trim().min(3, lang.userNameMinSymbols),
        email: z.string().trim().email(lang.emailNotCorrect),
        password: z.string().trim().min(6, lang.passwordMinSymbols),
        confirmPassword: z.string().trim().min(6, lang.passwordMinSymbols),
    }).refine((data) => data.password === data.confirmPassword, {
        message: lang.passwordNotEqual,
        path: ["confirmPassword"],
    });
