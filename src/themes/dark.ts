import { createTheme, type ThemeOptions } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"
import { baseOptions } from "./base.ts"

const darkThemeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
            light: "#1976d2",
            dark: "#1976d2",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#333333",
            light: "#333333",
            dark: "#333333",
            contrastText: "#ffffff",
        },
        error: {
            main: "#d32f2f",
            light: "#d32f2f",
            dark: "#d32f2f",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#ffa000",
            light: "#ffa000",
            dark: "#ffa000",
            contrastText: "#ffa000",
        },
        info: {
            main: "#0288d1",
            light: "#0288d1",
            dark: "#0288d1",
            contrastText: "#ffffff",
        },
        success: {
            main: "#2e7d32",
            light: "#2e7d32",
            dark: "#2e7d32",
            contrastText: "#ffffff",
        },
        background: {
            default: "#242537",
            paper: "#02033a",
        },
        text: {
            primary: "#111827",
            secondary: "#4b5563",
            disabled: "#d32f2f",
        },
        divider: "#0083ff",
    },

};

export const darkTheme = createTheme(deepmerge(baseOptions, darkThemeOptions));
