import {CircularProgress, IconButton} from "@mui/material";
import useLang from "../hooks/useLang.ts";
import {languageCodes} from "../lang/langCodes.ts"
import {useState} from "react";
import uaIcon from "../assets/ua.svg"
import enIcon from "../assets/en.svg"
import WaitingSvg from "../assets/logomm3.svg"
const icons = {
    [languageCodes.en]: uaIcon,
    [languageCodes.ua]: enIcon
}
const LangSwitcher = () => {
    const {
        code,
        setLangCode,
        isSwitching
    } = useLang();

    const toggleLang = () => {
        setLangCode(code === languageCodes.ua ? languageCodes.en : languageCodes.ua);
    };

    return (
        <IconButton onClick={toggleLang} color="inherit">
            {isSwitching ? <CircularProgress sx={{minWidth:48}}/> : <img src={icons[code]} alt={code} width={48} height={24}/>}
        </IconButton>
    );
};

export default LangSwitcher;
