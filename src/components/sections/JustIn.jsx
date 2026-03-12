import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { getProducts } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Error from "../ui/Error";
import Loader from "../ui/Loader";

const DESKTOP_VISIBLE = 5;

function JustIn() {
    const [products, setProducts] = useState([]);
    const [needsSwiper, setNeedsSwiper] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
        <div className="w-full">
            <div className="max-w-[1200px] mx-auto py-[80px] flex flex-col gap-[40px] px-6">
                <div className="w-full h-[42px] flex items-center justify-between">
                    <p className="font-inter font-bold text-[28px] leading-[42px] text-text whitespace-nowrap">
                        Just In
                    </p>

                    {needsSwiper && (
                        <div className="justin-pagination flex items-center gap-2"></div>
                    )}
                </div>

                <div className="w-full pb-10">
                    <Swiper
                        key={needsSwiper ? "swiper-enabled" : "swiper-disabled"}
                        modules={[Autoplay, Pagination]}
                        grabCursor={true}
                        loop={needsSwiper}
                        autoplay={needsSwiper ? { delay: 2000, disableOnInteraction: false } : false}
                        // pagination={needsSwiper ? {
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // } : false}
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
                                    img={product.image}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating.rate}
                                    badge="New"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default JustIn;