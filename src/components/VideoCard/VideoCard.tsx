import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import ImageWithPlaceholder from "../ImageWithPlaceholder";
import ROUTE_PATHS from "../../ways/routes.ts";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

export type VideoCardInfo = {
    videoId: number
    src: string
    title: string;
}

const VideoCard = (cardInfo: VideoCardInfo) => {
    const videoLink = ROUTE_PATHS.video.link(cardInfo.videoId)
    const absoluteUrl = window.location.origin + videoLink
    return <ImageListItem key={cardInfo.videoId} component={Link}
                          to={videoLink}>
        <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: "8px"
        }}>
            <ImageWithPlaceholder src={cardInfo.src} alt={cardInfo.title}/>
        </div>
        <ImageListItemBar title={cardInfo.title}
                          sx={{maxHeight: "30%"}}
                          actionIcon={
                              <>
                                  <IconButton
                                      title={"Копіювати"}
                                      sx={{color: "white"}}
                                      onClick={async (e) => {
                                          e.preventDefault();
                                          await navigator.clipboard.writeText(absoluteUrl)
                                      }}
                                  >
                                      <ContentCopyIcon/>
                                  </IconButton>
                                  <IconButton
                                      sx={{color: "white"}}
                                      onClick={(e) => {
                                          e.preventDefault();
                                      }}
                                  >
                                      <DownloadIcon/>
                                  </IconButton>
                              </>
                          }/>
    </ImageListItem>
}

export default VideoCard