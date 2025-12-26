import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer";
import NotFoundPage from "./NotFoundPage";
import Waiting from "../components/Waiting";

const VideoPage = () => {
    const { id } = useParams<{ id: string }>();
    const [exists, setExists] = useState<boolean | null>(null); // null = loading
    const videoSrc = id ? `http://localhost:5000/api/video/${id}` : "";

    useEffect(() => {
        if (!id) {
            setExists(false);
            return;
        }

        let cancelled = false;

        const check = async () => {
            try {
                // Робимо маленький GET з Range — сервер віддасть 206 або 200
                const res = await axios.get(videoSrc, {
                    headers: { Range: "bytes=0-0" },
                    responseType: "arraybuffer",
                    timeout: 5000,
                });
                if (cancelled) return;
                // успішний код 206 (partial) або 200 — вважаємо, що відео є
                setExists(res.status === 206 || res.status === 200);
            } catch (err: any) {
                if (cancelled) return;
                // якщо 404 або інша помилка — вважаємо, що немає
                setExists(false);
            }
        };

        check();

        return () => {
            cancelled = true;
        };
    }, [id, videoSrc]);

    if (exists === null) return <Waiting />;
    if (!exists) return <NotFoundPage isVideo={true} />;
    return <VideoPlayer src={videoSrc} />;
};

export default VideoPage;
