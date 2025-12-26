export const languageCodes = {
    en: 'en',
    ua: 'ua',
} as const;

export type LangCode = keyof typeof languageCodes;