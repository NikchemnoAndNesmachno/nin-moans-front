import {type ReactNode, useEffect, useMemo, useState} from "react";
import {defaultThemeCode, type ThemeCodesType, themes} from "../themes";
import {ThemeProvider as MuiThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

const themeKey = "theme"
export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [name, setTheme] = useState<ThemeCodesType>(() => {
        return (localStorage.getItem(themeKey) as ThemeCodesType) || defaultThemeCode;
    });

    useEffect(() => {
        localStorage.setItem(themeKey, name);
    }, [name]);

    const theme = useMemo(() => themes[name], [name]);

    return (
        <ThemeContext.Provider value={{name, setTheme}}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};