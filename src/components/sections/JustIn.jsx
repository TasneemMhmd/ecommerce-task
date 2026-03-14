import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { getProducts } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Error from "../ui/Error";
import Loader from "../ui/Loader";

const DESKTOP_VISIBLE = 5;

function JustIn() {
    const [products, setProducts] = useState([]);
    const [needsSwiper, setNeedsSwiper] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
                setNeedsSwiper(data.length > DESKTOP_VISIBLE);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loader />;
    if (error) return <Error />;
    if (!products.length) return null;

    return (
        <section className="JustIn">
        <div className="container mx-auto">
            <div className="py-[80px] flex flex-col gap-[40px] px-6">
                <div className="w-full flex items-center justify-between">
                    <p className="font-bold text-[28px] leading-[42px] text-text whitespace-nowrap">
                        Just In
                    </p>

                    {needsSwiper && (
                        <div className="flex items-center gap-2">
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    className={`rounded-full transition-all duration-300 ${activeIndex % 3 === i
                                        ? "w-[8px] h-[8px] bg-text"
                                        : "w-[8px] h-[8px] bg-[#D1D5DB]"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <Swiper
                        onSliderFirstMove={() => setIsDragging(true)}
                        key={needsSwiper ? "swiper-enabled" : "swiper-disabled"}
                        modules={[Autoplay]}
                        grabCursor={true}
                        loop={needsSwiper}
                        autoplay={needsSwiper ? { delay: 2000, disableOnInteraction: false } : false}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                            setTimeout(() => setIsDragging(false), 100);
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1.5, spaceBetween: 16 },
                            480: { slidesPerView: 2.5, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                            1200: { slidesPerView: DESKTOP_VISIBLE, spaceBetween: 24, enabled: needsSwiper },
                        }}
                        className="w-full"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    img={product.image}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating.rate}
                                    badge="New"
                                    isDragging={isDragging}

                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        </section>
    );
}

export default JustIn;