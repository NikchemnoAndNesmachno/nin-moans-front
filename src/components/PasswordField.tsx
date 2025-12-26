import {useState} from 'react';
import {TextField, IconButton, InputAdornment, type TextFieldProps} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

export default function PasswordField(props: TextFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            {...props}
            type={showPassword ? 'text' : 'password'}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}
