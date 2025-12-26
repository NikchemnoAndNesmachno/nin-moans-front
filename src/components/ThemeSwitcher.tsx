import IconButton from "@mui/material/IconButton";
import {useTheme} from "../hooks/useTheme.ts";
import MoonIcon from "@mui/icons-material/DarkMode"
import LightIcon from "@mui/icons-material/LightMode";
import {themeCodes} from "../themes";

const ThemeSwitcher = () => {
    const {name, setTheme} = useTheme();
    const toggleTheme = () => {
        setTheme(name === themeCodes.light ? themeCodes.dark : themeCodes.light);
    };


    return (
        <IconButton onClick={toggleTheme} color="inherit" sx={{borderRadius: 0}} >
            {name !== themeCodes.light ? <MoonIcon/> : <LightIcon/>}
        </IconButton>
    );
};

export default ThemeSwitcher;
