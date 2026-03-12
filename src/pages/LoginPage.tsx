import axios from "axios";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Waiting from "../components/Waiting.tsx"
import {Box, Button, TextField, Typography, Stack} from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import {Link} from "react-router-dom";
import ROUTE_PATHS from "../ways/routes.ts";
import useLang from "../hooks/useLang.ts";
import {createLoginSchema} from "../validation/login.schema.ts";
import {useMemo} from "react";
import API from "../ways/api.ts";

const LoginPage = () => {
    const {lang} = useLang();

    // Лінива генерація схеми
    const loginSchema = useMemo(() => {
        if (!lang) return null;
        return createLoginSchema(lang.validation);
    }, [lang]);
    type LoginFormData = z.infer<NonNullable<typeof loginSchema>>;

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<LoginFormData>({
        resolver: loginSchema ? zodResolver(loginSchema) : undefined
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await axios.post('http://localhost:8080' + API.login, data);
            toast.success(`Вітаю, ${response.data.email}!`);
        } catch (error: any) {
            const message = error.response?.data?.error || 'Щось пішло не так';
            toast.error(message);
        }
    };

    // Поки lang/schema не готові — рендеримо лоадер
    if (!lang || !loginSchema) {
        return <Waiting/>
    }

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 5,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: 2,
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <Typography variant="h5" mb={3}>
                {lang.titles.loginTitle}
            </Typography>
            <Stack spacing={2}>
                <TextField
                    label={lang.textTitles.email}
                    fullWidth
                    margin="normal"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email ? (errors.email.message as string) : ''}
                />

                <TextField
                    label={lang.textTitles.password}
                    type="password"
                    fullWidth
                    margin="normal"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password ? (errors.password.message as string) : ''}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{mt: 2}}
                >
                    {lang.buttonTitles.login}
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
                    to={ROUTE_PATHS.register}
                    type="button"
                    variant="outlined"
                    color="secondary"
                    sx={{
                        mt: 2,
                        width: '80%',
                        alignSelf: 'center'
                    }}
                >
                    {lang.buttonTitles.goToSignUp}
                </Button>
            </Stack>
        </Box>
    );
};

export default LoginPage;
