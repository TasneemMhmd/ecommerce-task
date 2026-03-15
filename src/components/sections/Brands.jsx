import { useState, useEffect } from "react";
import CustomSwiper from "../ui/CustomSwiper";

const brands = ["LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM"];
const DESKTOP_VISIBLE = 5;

function Brands() {
    const needsSwiper = brands.length > DESKTOP_VISIBLE;
    const [swiperEnabled, setSwiperEnabled] = useState(() => window.innerWidth < 768 || needsSwiper);

    useEffect(() => {
        const handleResize = () => setSwiperEnabled(window.innerWidth < 768 || needsSwiper);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [needsSwiper]);

    const brandItems = brands.map((name, i) => ({ id: i, name }));

    return (
        <section className="brands">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 md:py-10 px-6 py-6 items-center justify-center">
                    <p className="font-semibold text-base leading-6 text-center text-text">
                        Trending Brands
                    </p>
                    <div className="w-full max-w-[1152px]">
                        <CustomSwiper
                            id="brands"
                            items={brandItems}
                            showArrows={swiperEnabled}
                            loop={true}
                            className="opacity-50"
                            breakpoints={{
                                0: { slidesPerView: 2.5, spaceBetween: 24 },
                                768: { slidesPerView: DESKTOP_VISIBLE, spaceBetween: 24 },
                            }}
                            renderItem={(brand) => (
                                <p className="font-extrabold text-xl leading-[30px] text-center">
                                    {brand.name}
                                </p>
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;