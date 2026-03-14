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
        <section className="instagram">
            <div className="container mx-auto">
                <div className="w-full py-8 md:py-20 flex flex-col gap-2 px-6">
                    <div className="w-full flex justify-center items-center">
                        <p className="font-semibold text-xs leading-[18px] tracking-[1px] text-center uppercase text-textLight">
                            NEWSFEED
                        </p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <p className="font-bold text-[32px] leading-[48px] text-text">
                            Instagram
                        </p>
                    </div>
                    <div className="w-full flex gap-6 justify-center items-center flex-col">
                        <p className="max-w-[436.36px] font-normal text-base leading-6 text-center text-textLight2">
                            Follow us on social media for more discount & promotions
                        </p>
                        <AnimatedLink label="@VisioCreate_official" className="font-normal text-base leading-6 text-textLight2 hover:text-text transition-colors duration-300" groupHover />
                    </div>
                    <div className="w-full pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {imgs.map((img) => (
                            <div key={img.id} className="group rounded-lg overflow-hidden">
                                <HoverImg src={img.src} alt="Instagram" className="w-full h-[288px]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstagramFeed;