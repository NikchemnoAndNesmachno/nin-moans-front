import { useState } from "react";
import WaitingIcon from "../assets/logomm3.svg"
import NotFoundIcon from "../assets/logo_404.svg"
type ImageWithPlaceholderProps = {
    src: string;
    alt: string;
};

const ImageWithPlaceholder = ({ src, alt}: ImageWithPlaceholderProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {!loaded && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={WaitingIcon} alt={"Waiting..."}/>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={(e) => {
                    setLoaded(true);
                    console.warn(e.currentTarget.src);
                    e.currentTarget.src = NotFoundIcon;
                }}
                style={{

                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
        </div>
    );
};

export default ImageWithPlaceholder