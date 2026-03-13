import { useState, useRef } from "react";
import video from "../../assets/videos/video.mp4";
import thumbnail from "../../assets/images/thumbnail.png";
import play from "../../assets/icons/play.svg";

function WinterCollectionsVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    return (
        <div className="w-full flex justify-center items-center px-6">
            <div className="w-full max-w-[1200px] pt-[80px] pb-[80px] flex flex-col gap-[32px]">
                <div className="w-full flex flex-col gap-[8px] items-center">
                    <p className="font-semibold text-[12px] leading-[18px] tracking-[1px] text-center uppercase text-secondary">
                        PROMOTION
                    </p>
                    <p className="font-bold text-[32px] leading-[48px] text-center text-text">
                        Winter Collections
                    </p>
                    <p className="font-normal text-[16px] leading-[24px] text-center text-textLight2">
                        Introducing the new winter jackets.
                    </p>
                </div>

                <div className="relative w-full max-w-[1200px] md:h-[500px] rounded-[12px] overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
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
                            <div className="group w-[64px] h-[64px] flex justify-center items-center pr-[18px] pl-[22px] rounded-full bg-white hover:bg-badge transition-colors duration-200">
                                <img src={play} className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WinterCollectionsVideo;