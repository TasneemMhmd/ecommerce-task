import puffers from "../../assets/images/Puffers.png";
import collection1 from "../../assets/images/collection1.png";
import collection2 from "../../assets/images/collection2.png";
import article2 from "../../assets/images/article2.png";
import HoverImg from "../ui/HoverImg";
import AnimatedLink from "../ui/AnimatedLink";

const imgs = [
    { id: 1, src: puffers },
    { id: 2, src: collection1 },
    { id: 3, src: collection2 },
    { id: 4, src: article2 },
];

function InstagramFeed() {
    return (
        <div className="w-full mx-auto flex justify-center">
            <div className="w-full max-w-[1200px] pt-[80px] pb-[80px] flex flex-col gap-[8px] px-6">
                <div className="w-full flex justify-center items-center">
                    <p className="font-semibold text-[12px] leading-[18px] tracking-[1px] text-center uppercase text-textLight">
                        NEWSFEED
                    </p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <p className="font-bold text-[32px] leading-[48px] text-text">
                        Instagram
                    </p>
                </div>
                <div className="w-full flex gap-[24px] justify-center items-center flex-col">
                    <p className="max-w-[436.36px] font-normal text-[16px] leading-[24px] text-center text-textLight2">
                        Follow us on social media for more discount & promotions
                    </p>
                    <a href="#" className="group w-fit mx-auto">
                        <AnimatedLink label="@VisioCreate_official" className="font-normal text-[16px] leading-[24px] text-textLight2 hover:text-text transition-colors duration-300" groupHover />
                    </a>
                </div>
                <div className="w-full pt-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                    {imgs.map((img) => (
                        <div key={img.id} className="group rounded-[8px] overflow-hidden">
                            <HoverImg src={img.src} alt="Instagram" className="w-full h-[288px]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InstagramFeed;