import {createContext} from "react"
import {defaultThemeCode, type ThemesType, type ThemeCodesType} from "../themes"

export interface ThemeContextType {
    name: ThemeCodesType;
    setTheme: (mode: ThemesType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    name: defaultThemeCode,
    setTheme: () => {},
});




