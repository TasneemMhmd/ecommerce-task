import { ArrowRight } from "lucide-react";

const collections = [
    { image: "/src/assets/images/article1.png", title: "November Outfits" },
    { image: "/src/assets/images/collection2.png", title: "Cashmere Set" },
    { image: "/src/assets/images/collection1.png", title: "The New Nordic" },
    { image: "/src/assets/images/article2.png", title: "The Leather" },
];

function Collections() {
    return (
        <div className="w-full px-4 py-6">
            <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mx-auto">
                {collections.map((collection) => (
                    <div className="relative w-full aspect-[588/400] rounded-[12px] overflow-hidden">
                        <img
                            src={collection.image}
                            alt={collection.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 p-4 md:p-[32px] bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end">
                            <p className="font-semibold text-lg md:text-[24px] leading-tight md:leading-[36px] text-white">
                                {collection.title}
                            </p>
                            <a href="#" className="group font-medium text-xs md:text-[14px] text-white leading-[21px] underline flex items-center gap-1 w-fit">
                                Collections
                                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={13} color="#FFFFFF" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collections;