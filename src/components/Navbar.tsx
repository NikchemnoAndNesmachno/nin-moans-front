import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme as useMuiTheme
} from '@mui/material';
import ROUTE_PATHS from "../ways/routes.ts"
import NavButton from './NavButton.tsx';
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import LangSwitcher from "./LangSwitcher.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import useLang from "../hooks/useLang.ts";
import WaitingSVG from "../assets/logomm3.svg"
const Navbar = () => {
    const muiTheme = useMuiTheme()
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))
    const {lang} = useLang()
    if (!lang) return <img src={WaitingSVG} alt="loading..." height={100}/>

    return (
        <AppBar position="static">
            <Toolbar sx={{
                height: 64,
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Typography variant="h6" component="div" sx={{flexShrink: 0}}>
                </Typography>
                <Box sx={{
                    display: 'flex',
                    height: '100%'
                }}>
                    <NavButton to={ROUTE_PATHS.index} icon={<HomeIcon/>} label={lang.buttonTitles.home}
                               hideLabel={isMobile}/>
                    <NavButton to={ROUTE_PATHS.account} icon={<PersonIcon/>} label={lang.buttonTitles.account}
                               hideLabel={isMobile}/>
                    <ThemeSwitcher/>
                    <LangSwitcher/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
