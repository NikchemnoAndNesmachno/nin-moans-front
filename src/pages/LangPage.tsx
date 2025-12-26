import useLang from '../hooks/useLang.ts';
import {type LangCode} from '../lang/langCodes.ts';
import {FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent} from '@mui/material';

const LangPage = () => {
    const {
        lang,
        code,
        setLangCode
    } = useLang();
    const handleChange = (event: SelectChangeEvent<LangCode>) => {
        setLangCode(event.target.value as LangCode);
    };

    return (
        <FormControl fullWidth variant="outlined" size="small" sx={{
            maxWidth: 200,
            mb: 2
        }}>
            <InputLabel id="language-select-label">{lang!.titles.languagesTitle}</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select"
                value={code}
                label="Language"
                onChange={handleChange}
            >
                {Object.entries(lang!.languageNames).map(([langCode, langName]) => (
                    <MenuItem key={langCode} value={langCode}>
                        {langName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default LangPage;