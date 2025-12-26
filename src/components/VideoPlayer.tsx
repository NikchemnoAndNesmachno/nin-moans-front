import React, { useRef, useState } from 'react';
import { Box, CardMedia, IconButton, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type VideoPlayerProps = {
    src: string;
    poster?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // 0–100
    const [volume, setVolume] = useState(100);
    const [isSeeking, setIsSeeking] = useState(false);

    const handlePlayPause = async () => {
        const video = videoRef.current!;
        if (video.paused) {
            await video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current!;
        if (!isSeeking && video.duration) {
            setProgress((video.currentTime / video.duration) * 100);
        }
    };

    const handleSeekChange = (_: any, value: number | number[]) => {
        setIsSeeking(true);
        setProgress(Array.isArray(value) ? value[0] : value);
    };

    const handleSeekCommitted = (_: any, value: number | number[]) => {
        const video = videoRef.current!;
        const newProgress = Array.isArray(value) ? value[0] : value;
        video.currentTime = (newProgress / 100) * video.duration;
        setIsSeeking(false);
    };

    const handleVolumeChange = (_: any, value: number | number[]) => {
        const vol = Array.isArray(value) ? value[0] : value;
        if (videoRef.current) videoRef.current.volume = vol / 100;
        setVolume(vol);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 900,
                aspectRatio: '16/9',
                margin: '0 auto',
                background: '#000',
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            <CardMedia
                component="video"
                ref={videoRef}
                src={src}
                poster={poster}
                preload="metadata"
                style={{ width: '100%', height: '100%', display: 'block' }}
                onTimeUpdate={handleTimeUpdate}
                onClick={handlePlayPause}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    gap: 1,
                }}
            >
                <IconButton onClick={handlePlayPause} color="inherit">
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>

                <Slider
                    value={progress}
                    onChange={handleSeekChange}
                    onChangeCommitted={handleSeekCommitted}
                    sx={{ flex: 1, mx: 2 }}
                />

                <VolumeUpIcon />
                <Slider
                    value={volume}
                    onChange={handleVolumeChange}
                    sx={{ width: 100 }}
                />
            </Box>
        </Box>
    );
};

export default VideoPlayer;
