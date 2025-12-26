import type {Lang} from "../lang/types.ts"

import {createContext} from 'react';
import {type LangCode} from "../lang/langCodes.ts";

interface LangContextType {
    lang: Lang | null
    code: LangCode
    setLangCode: (code: LangCode) => void
    isSwitching: boolean
}

export const LangContext = createContext<LangContextType | null>(null);

