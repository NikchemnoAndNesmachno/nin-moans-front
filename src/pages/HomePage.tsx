import VideoGrid, {type VideoCardInfo} from "../components/VideoGrid.tsx";
import useLang from "../hooks/useLang.ts";

const images: VideoCardInfo[] = Array.from({length: 50}, (_, i) => ({
    videoId: i,
    src: `https://picsum.photos/300/200?random=${i}`,
    title: `Фото №${i + 1} з дуже і дуже довгою назвою ого`,
}));

const HomePage = () => {
    const {lang} = useLang()
    if (!lang) {
        return <p>Завантаження...</p>;
    }

    return (
        <>
            <h2>{lang.textTitles.photo}</h2>
            <VideoGrid images={images} />
        </>
    );

};

export default HomePage;
