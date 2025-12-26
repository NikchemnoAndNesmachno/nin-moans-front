import { createTheme, type ThemeOptions } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"
import { baseOptions } from "./base.ts"

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
            light: "#fff",
            dark: "#fff",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#9c27b0",
            light: "#fff",
            dark: "#fff",
            contrastText: "#ffffff",
        },
        error: {
            main: "#d32f2f",
            light: "#fff",
            dark: "#fff",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#ffa000",
            light: "#fff",
            dark: "#fff",
            contrastText: "#ffffff",
        },
        info: {
            main: "#0288d1",
            light: "#fff",
            dark: "#fff",
            contrastText: "#ffffff",
        },
        success: {
            main: "#2e7d32",
            light: "#fff",
            dark: "#fff",
            contrastText: "#ffffff",
        },
        background: {
            default: "#f4f6f8",
            paper: "#ffffff",
        },
        text: {
            primary: "#111827",
            secondary: "#4b5563",
            disabled: "#d32f2f",
        },
        divider: "#e0e0e0",
    },
};

export const lightTheme = createTheme(deepmerge(baseOptions, lightThemeOptions));
