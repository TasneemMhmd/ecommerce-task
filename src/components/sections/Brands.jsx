import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const brands = ["LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM"];
const DESKTOP_VISIBLE = 5;

function Brands() {
    const needsSwiper = brands.length > DESKTOP_VISIBLE;
    const [swiperEnabled, setSwiperEnabled] = useState(() => window.innerWidth < 768 || needsSwiper);
    useEffect(() => {
        const handleResize = () => {
            setSwiperEnabled(window.innerWidth < 768 || needsSwiper);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [needsSwiper]);

    return (
        <section className="brands">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 md:py-10 px-6 py-6 items-center justify-center">
                    <div className="w-full max-w-[1152px] h-[30px] flex items-center justify-center">
                        <p className="font-semibold h-6 w-[127.419px] text-base leading-6 text-center text-text">
                            Trending Brands
                        </p>
                    </div>
                    <div className="w-full max-w-[1152px] h-[30px]">
                        <Swiper
                            className="w-full opacity-50"
                            modules={[Autoplay, Navigation]}
                            grabCursor={true}
                            loop={true}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            navigation={{
                                nextEl: ".brands-next",
                                prevEl: ".brands-prev",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 2.5, spaceBetween: 24 },
                                768: { slidesPerView: DESKTOP_VISIBLE, spaceBetween: 24 },
                            }}
                        >
                            {brands.map((brand, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <p className="w-[122px] h-[30px] font-extrabold text-xl leading-[30px] text-center">
                                        {brand}
                                    </p>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {swiperEnabled && (
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <button className="brands-prev group opacity-50 hover:opacity-100 transition-opacity duration-200">
                                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                                </button>
                                <button className="brands-next group opacity-50 hover:opacity-100 transition-opacity duration-200">
                                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;