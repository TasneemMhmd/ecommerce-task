import { useState, useRef } from "react";
import video from "../../assets/videos/video.mp4";
import thumbnail from "../../assets/images/thumbnail.png";
import Play from "../../assets/icons/play.svg?react";

function WinterCollectionsVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    return (
        <section className="winter-video">
            <div className="container mx-auto px-6 md:px-auto">
                <div className="w-full py-6 md:py-20 flex flex-col gap-8">
                    <div className="w-full flex flex-col gap-4 items-center">
                        <p className="font-semibold text-xs leading-[18px] tracking-[1px] text-center uppercase text-secondary">
                            PROMOTION
                        </p>
                        <p className="font-bold text-[32px] leading-[48px] text-center text-text text-nowrap">
                            Winter Collections
                        </p>
                        <p className="font-normal text-base leading-6 text-center text-textLight2">
                            Introducing the new winter jackets.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[1200px] h-[500px] rounded-xl overflow-hidden">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster={thumbnail}
                            controls={isPlaying}
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src={video} type="video/mp4" />
                        </video>

                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                                onClick={handlePlay}
                            >
                                <div className="group w-16 h-16 flex justify-center items-center pr-[18px] pl-[22px] rounded-full bg-white hover:bg-badge transition-colors duration-200">
                                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WinterCollectionsVideo;