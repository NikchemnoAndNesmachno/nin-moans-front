import {z} from "zod";
import type {Lang} from "../lang/types.ts";

export const createLoginSchema = (lang: Lang["validation"]) =>
    z.object({
        email: z.string().trim().email(lang.emailNotCorrect),
        password: z.string().trim().min(6, lang.passwordMinSymbols)
    })
