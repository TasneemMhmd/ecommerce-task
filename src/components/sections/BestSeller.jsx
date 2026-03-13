import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { getProducts } from "../../services/api";

function BestSeller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data.slice(0, 8)));
    }, []);

    return (
        <div className="w-full">
            <div className="max-w-[1200px] w-full flex flex-col gap-[40px] pt-[160px] pb-[80px] mx-auto px-6">
                <div className="w-full flex justify-center items-center">
                    <p className="font-bold text-[28px] leading-[42px] text-center text-text whitespace-nowrap">
                        Best Seller
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            img={product.image}
                            title={product.title}
                            price={product.price}
                            rating={product.rating.rate}
                            badge="Hot"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestSeller;