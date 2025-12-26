import type {Shadows, ThemeOptions} from "@mui/material/styles";

export const baseOptions: ThemeOptions = {
    components:{
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true
            },
            styleOverrides: {
                root:{
                    borderRadius: 0,
                    "&:active":{
                        transform: "scale(0.9)"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides:{
                root:{
                    borderWidth: 3,
                    borderRadius: 0,

                }
            }
        },
        MuiIconButton: {
            styleOverrides:{
                root:{
                    borderRadius: 0,
                    "&:active":{
                        transform: "scale(0.8)"
                    }
                }
            }
        }
    },
    typography: {
        fontFamily: "\"Inter\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        h1: {
            fontSize: "2.5rem"
        },
        h2: {
            fontSize: "2rem"
        },
        h3: {
            fontSize: "1.75rem"
        },
        h4: {
            fontSize: "1.5rem"
        },
        h5: {
            fontSize: "1.25rem"
        },
        h6: {
            fontSize: "1rem"
        }
    },
    shadows: Array(25).fill("none") as Shadows,
    spacing: 8
};