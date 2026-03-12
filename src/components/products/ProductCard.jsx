import { useState } from "react";
import star from "../../assets/icons/star.svg";

function ProductCard({ img, rating, title, price, badge }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="relative w-full flex flex-col gap-3">
            <div
                className="relative w-full aspect-[220.8/275.98] rounded-lg bg-badge overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={img} alt={title} className="w-full h-full object-contain" />

                <div className="absolute top-2 left-2 bg-white text-text text-xs font-semibold px-2 py-1 rounded">
                    <p className="font-semibold text-[11px] leading-[16.5px]">
                        {badge}
                    </p>
                </div>

                <div
                    className={`absolute top-2 right-2 bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`w-4 h-4 transition-all duration-300 ${isWishlisted ? 'fill-red-500 stroke-red-500 scale-125' : 'fill-none stroke-gray-600'}`}
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-center pb-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="w-[90%] h-[44px] bg-text text-white rounded-[4px] flex items-center justify-center">
                        <span className="font-medium text-[13px] leading-[19.5px]">
                            Add to cart
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col gap-1">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={star}
                            alt="Star"
                            className={`w-3 h-3 ${index < Math.round(rating) ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
                <p className="w-full font-medium text-[14px] leading-[19.6px] text-text line-clamp-2">
                    {title}
                </p>
                <p className="text-text font-semibold text-[14px] leading-[21px]">
                    ${price.toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;