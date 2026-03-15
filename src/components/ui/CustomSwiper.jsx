import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

function CustomSwiper({
    items = [],
    renderItem,
    breakpoints,
    loop = true,
    autoplay = { delay: 2000, disableOnInteraction: false },
    showArrows = false,
    showDots = false,
    activeIndex = 0,
    onSlideChange,
    onSliderFirstMove,
    className = "",
    id = "swiper",
}) {
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                loop={loop}
                autoplay={autoplay}
                navigation={showArrows ? {
                    nextEl: `.${id}-next`,
                    prevEl: `.${id}-prev`,
                } : false}
                onSlideChange={onSlideChange}
                onSliderFirstMove={onSliderFirstMove}
                breakpoints={breakpoints}
                className={`w-full ${className}`}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.id ?? index}>
                        {renderItem(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
            {showDots && (
                <div className="flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className={`rounded-full transition-all duration-300 ${activeIndex % 3 === i ? "w-2 h-2 bg-text" : "w-2 h-2 bg-[#D1D5DB]"}`}
                        />
                    ))}
                </div>
            )}
            {showArrows && (
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button className={`${id}-prev group opacity-50 hover:opacity-100 transition-opacity duration-200`}>
                        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    </button>
                    <button className={`${id}-next group opacity-50 hover:opacity-100 transition-opacity duration-200`}>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default CustomSwiper;