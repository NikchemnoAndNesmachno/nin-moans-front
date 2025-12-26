import gif from "../assets/logomm3.svg"
import MuiStack from "@mui/material/Stack"
import Typography from "@mui/material/Typography";

const Waiting = () => {
    return <MuiStack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        role="status"
        aria-busy="true"
    >
        <img src={gif} alt="waiting"/>
        <Typography variant="h5" component="div">
            Очікуємо / Waiting
        </Typography>
    </MuiStack>
}

export default Waiting