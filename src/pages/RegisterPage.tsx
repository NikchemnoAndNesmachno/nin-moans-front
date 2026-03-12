import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin } from '@react-oauth/google';

import { Box, Button, TextField, Typography, Stack, CircularProgress } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import PasswordField from "../components/PasswordField.tsx";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../ways/routes.ts";
import useLang from "../hooks/useLang.ts";
import { createRegisterSchema } from "../validation/register.schema.ts";
import API from "../ways/api.ts";

const RegisterPage = () => {
    const { lang } = useLang();

    // Лінива генерація схеми — створюється тільки коли lang !== null
    const schema = useMemo(() => {
        if (!lang) return null;
        return createRegisterSchema(lang.validation);
    }, [lang]);

    // Інференс типу на основі схемі (компілятор знає, що це NonNullable)
    type RegisterFormData = z.infer<NonNullable<typeof schema>>;

    // Викликаємо useForm завжди (не умовно), але передаємо резолвер тільки коли схема є
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: schema ? zodResolver(schema) : undefined,
        // за бажанням можна додати defaultValues тут
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const response = await axios.post('http://localhost:8080' + API.register, {
                email: data.email,
                username: data.userName,
                password: data.password,
            });
            toast.success(`Реєстрація пройшла: ${response.data.email}`);
        } catch (error: any) {
            const message = error.response?.data?.error || "Something went wrong";

            toast.error(message);
        }
    };

    if (!lang || !schema) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                <CircularProgress />
            </Box>
        );
    }

    // Далі — без "!" — бо ми гарантували, що lang/schema існують
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 5,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" mb={3}>
                {lang.titles.signUpTitle}
            </Typography>
            <Stack spacing={2}>
                <TextField
                    label={lang.textTitles.userName}
                    {...register('userName')}
                    error={!!errors.userName}
                    helperText={errors.userName ? (errors.userName.message as string) : ''}
                />

                <TextField
                    label={lang.textTitles.email}
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email ? (errors.email.message as string) : ''}
                />

                <PasswordField
                    label={lang.textTitles.password}
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password ? (errors.password.message as string) : ''}
                />

                <PasswordField
                    label={lang.textTitles.passwordRepeat}
                    {...register('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword ? (errors.confirmPassword.message as string) : ''}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{ mt: 2 }}
                >
                    {lang.buttonTitles.signUp}
                </Button>

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log("Success: ", credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />

                <Button
                    component={Link}
                    to={ROUTE_PATHS.login}
                    type="button"
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 2, width: '80%', alignSelf: 'center' }}
                >
                    {lang.buttonTitles.goToLogin}
                </Button>
            </Stack>
        </Box>
    );
};

export default RegisterPage;
