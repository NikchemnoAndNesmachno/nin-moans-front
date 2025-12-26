import {lightTheme} from "./light";
import {darkTheme} from "./dark";
import type {Theme} from "@mui/material";

export const themeCodes = {
    light: "light",
    dark: "dark",
} as const

export type ThemeCodesType = typeof themeCodes[keyof typeof themeCodes];
export const themes: Record<ThemeCodesType, Theme> = {
    [themeCodes.light]: lightTheme,
    [themeCodes.dark]: darkTheme,
};

export type ThemesType = keyof typeof themes;
export const defaultThemeCode: ThemeCodesType = themeCodes.light;
export const defaultTheme: Theme = themes[defaultThemeCode];