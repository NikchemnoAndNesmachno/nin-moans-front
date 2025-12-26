import {Button, Stack, Typography} from "@mui/material"
import {themeCodes} from "../themes"
import useLang from "../hooks/useLang.ts"
import {useTheme} from "../hooks/useTheme.ts"

const ThemePage = () => {
    const {
        name,
        setTheme
    } = useTheme();
    const {lang} = useLang()

    return (
        <Stack spacing={2} alignItems="center" p={4}>
            <Typography variant="h4">{lang!.titles.currentThemesTitle}: {name}</Typography>

            <Stack direction="row" spacing={2}>
                {Object.values(themeCodes).map((themeName) => (
                    <Button
                        key={themeName}
                        variant={name === themeName ? "contained" : "outlined"}
                        onClick={() => setTheme(themeName)}
                    >
                        {themeName}
                    </Button>
                ))}
            </Stack>
        </Stack>
    )
};

export default ThemePage;
