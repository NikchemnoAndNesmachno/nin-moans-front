import Svg from "../assets/logo_404.svg"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import useLang from "../hooks/useLang.ts"
import Waiting from "../components/Waiting.tsx";

type NotFoundPageProps = {
    isVideo: boolean
}
const NotFoundPage = ({isVideo = true}: NotFoundPageProps) => {
    const {lang} = useLang()
    if (!lang) return <Waiting/>
    return (
        <Stack spacing={3} sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3
        }}>
            <Box
                component="img"
                src={Svg}
                alt="Page not found"
                sx={{
                    width: "80%",
                    maxWidth: 700,
                }}
            />
            <Typography
                sx={{
                    typography: {
                        xs: "h6",
                        sm: "h5",
                        md: "h4"
                    },
                    fontWeight: "bold",
                }}
            >
                {isVideo ? lang.errorTitles.error404.videoNotFound : lang.errorTitles.error404.pageNotFound}
            </Typography>
            <Typography
                sx={{
                    typography: {
                        xs: "body2",
                        sm: "body1"
                    },
                    color: "text.secondary",
                    maxWidth: 500,
                }}
            >
                {isVideo ? lang.errorTitles.error404.videoNotFoundText : lang.errorTitles.error404.pageNotFoundText}
            </Typography>
        </Stack>
    )
}

export default NotFoundPage