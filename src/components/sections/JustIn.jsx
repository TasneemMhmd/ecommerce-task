import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { getProducts } from "../../services/api";
import CustomSwiper from "../ui/CustomSwiper";
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
                <div className="py-10 md:py-20 flex flex-col gap-[40px] px-6">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold text-[28px] leading-[42px] text-text whitespace-nowrap">
                            Just In
                        </p>
                        {needsSwiper && (
                            <div className="flex items-center gap-2">
                                {[0, 1, 2].map((i) => (
                                    <span
                                        key={i}
                                        className={`rounded-full transition-all duration-300 ${activeIndex % 3 === i ? "w-2 h-2 bg-text" : "w-2 h-2 bg-[#D1D5DB]"}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <CustomSwiper
                        id="justin"
                        items={products}
                        loop={needsSwiper}
                        autoplay={needsSwiper ? { delay: 2000, disableOnInteraction: false } : false}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                            setTimeout(() => setIsDragging(false), 100);
                        }}
                        onSliderFirstMove={() => setIsDragging(true)}
                        breakpoints={{
                            0: { slidesPerView: 1.5, spaceBetween: 16 },
                            480: { slidesPerView: 2.5, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                            1200: { slidesPerView: DESKTOP_VISIBLE, spaceBetween: 24, enabled: needsSwiper },
                        }}
                        renderItem={(product) => (
                            <ProductCard
                                id={product.id}
                                img={product.image}
                                title={product.title}
                                price={product.price}
                                rating={product.rating.rate}
                                badge="New"
                                isDragging={isDragging}
                            />
                        )}
                    />
                </div>
            </div>
        </section>
    );
}

export default JustIn;