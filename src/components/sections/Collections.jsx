import ArrowLink from "../ui/ArrowLink ";
import article1 from "../../assets/images/article1.png";
import collection2 from "../../assets/images/collection2.png";
import collection1 from "../../assets/images/collection1.png";
import article2 from "../../assets/images/article2.png";
import HoverImg from "../ui/HoverImg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
    { image: article1, title: "November Outfits" },
    { image: collection2, title: "Cashmere Set" },
    { image: collection1, title: "The New Nordic" },
    { image: article2, title: "The Leather" },
];

function Collections() {
    return (
        <section className="collections">
            <div className="container mx-auto px-6 md:px-auto">
                <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {collections.map((collection) => (
                        <Link to="/collections" key={collection.title} className="relative w-full aspect-[588/400] rounded-[12px] overflow-hidden group block">
                            <HoverImg src={collection.image} alt={collection.title} className="w-full h-full rounded-[12px]" />
                            <div className="absolute inset-0 p-4 md:p-[32px] bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 flex flex-col justify-end transition-all duration-500">
                                <p className="font-semibold text-lg md:text-6 leading-tight md:leading-[36px] text-white">
                                    {collection.title}
                                </p>
                                <p className="font-medium text-white underline flex items-center gap-1">
                                    Collections
                                    <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Collections;