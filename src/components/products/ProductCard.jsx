import { useState } from "react";
import Star from "../../assets/icons/star.svg?react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, img, rating, title, price, badge, isDragging }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addItem, cartItems, updateQuantity, toggleCart } = useCart();
    const cartItem = cartItems.find((item) => item.title === title);
    const isInCart = !!cartItem;
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (!isDragging) navigate(`/product/${id}`);
    };
    const isMobile = window.innerWidth < 768;


    return (
        <div className="relative w-full flex flex-col gap-3">
            <div
                className={`relative w-full aspect-[220.8/275.98] rounded-lg bg-badge overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}`} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}
            >
                <img src={img} alt={title} className="w-full h-full object-contain" />

                <div className="absolute top-2 left-2 bg-white text-text text-xs font-semibold px-2 py-1 rounded">
                    <p className="font-semibold text-[11px] leading-[16.5px]">
                        {badge}
                    </p>
                </div>

                <div
                    className={`absolute top-2 right-2 bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${isMobile || isHovered ? 'opacity-100' : 'opacity-0'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsWishlisted(!isWishlisted)
                    }}
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


                <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-center pb-2 transition-opacity duration-300 ${isMobile || isHovered ? 'opacity-100' : 'opacity-0'}`}>                    {isInCart ? (
                    <div className="w-[90%] h-8 md:h-[44px] bg-text text-white rounded-[4px] flex items-center justify-between px-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(cartItem.id, cartItem.quantity - 1)
                            }}
                            className="text-white text-lg font-medium hover:opacity-60 transition-opacity"
                        >
                            −
                        </button>
                        <span className="font-medium text-[13px]">{cartItem.quantity}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(cartItem.id, cartItem.quantity + 1)
                            }}
                            className="text-white text-lg font-medium hover:opacity-60 transition-opacity"
                        >
                            +
                        </button>
                    </div>
                ) : (<button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleCart();
                        addItem({ id, img, title, price, rating })
                    }}
                    className="w-[90%] h-8 md:h-[44px] bg-text text-white rounded-[4px] flex items-center justify-center">
                    <span className="font-medium text-[13px] leading-[19.5px]">
                        Add to cart
                    </span>
                </button>
                )}
                </div>
            </div>

            <div className="w-full flex flex-col gap-1">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            className={`w-3 h-3 ${index < Math.round(rating) ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
                <p className="w-full font-medium text-sm leading-[19.6px] text-text line-clamp-2">
                    {title}
                </p>
                <p className="text-text font-semibold text-sm leading-[21px]">
                    ${price.toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;