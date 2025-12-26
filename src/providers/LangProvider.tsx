import {type ReactNode, startTransition, useEffect, useState} from "react";
import {type LangCode, languageCodes} from "../lang/langCodes.ts";
import type {Lang} from "../lang/types.ts";
import {LangContext} from "../context/LangContext.tsx";

export const LangProvider = ({children}: { children: ReactNode }) => {
    const [code, setCode] = useState<LangCode>(languageCodes.en)
    const [lang, setLang] = useState<Lang | null>(null)
    const [nextCode, setNextCode] = useState<LangCode>(languageCodes.en)
    const [isSwitching, setIsSwitching] = useState(false)
    useEffect(() => {
        startTransition(loadLanguage)
        async function loadLanguage() {
            try {
                const module = await import(`../lang/dicts/${nextCode}.ts`)
                setLang(module.default)
                setCode(nextCode)
            } catch {
                const module = await import("../lang/dicts/en.ts")
                setLang(module.default)
            } finally {
                setIsSwitching(false)
            }
        }

    }, [nextCode])

    const setLangCodeLazy = (newCode: LangCode) => {
        startTransition(() => {
            setIsSwitching(true)
            setNextCode(newCode)
        });
    };

    return (
        <LangContext.Provider value={{
            lang,
            code,
            setLangCode: setLangCodeLazy,
            isSwitching
        }}>
            {children}
        </LangContext.Provider>
    );
}