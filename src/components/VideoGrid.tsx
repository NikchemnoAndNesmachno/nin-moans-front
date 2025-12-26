import {Box, ImageList, useMediaQuery} from "@mui/material"

import {useTheme as useMuiTheme} from "@mui/material/styles";
import VideoCard from "./VideoCard/VideoCard.tsx";

export type VideoCardInfo = {
    videoId: number
    src: string
    title: string;
};

type Props = {
    images: VideoCardInfo[];
};

const VideoGrid = ({images}: Props) => {
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(muiTheme.breakpoints.down("md"));
    let cols = 1
    if (isMobile) {
        cols = 2
    } else if (isMedium) {
        cols = 3
    } else {
        cols = 4
    }
    return (
        <Box>
            <ImageList variant="standard" cols={cols} gap={5}>
                {images.map((image) => {
                    return <VideoCard {...image}/>
                })
                }
            </ImageList>
        </Box>
    )
}

export default VideoGrid
