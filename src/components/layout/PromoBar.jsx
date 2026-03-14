import { X } from "lucide-react";
import { useState } from "react";
import IconBtn from "../ui/IconBtn";
import { Link } from "react-router-dom";

function PromoBar() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <section className="promo-bar">
            {isVisible && (
                <div className="container-fluid mx-auto bg-primary border-b">
                    <div className="px-6 pt-[9px] pb-[10px] flex justify-center items-center">
                        <p className="text-[13px] leading-[19.5px] font-normal text-white">
                            📦 30% off storewide — Limited time! <span className="hidden md:inline">
                                <Link to="/shop">
                                    S<span className="underline">hop Now →</span>
                                </Link>
                            </span>
                        </p>
                        <div className="ml-2 md:absolute md:right-6">
                            <IconBtn
                                onClick={() => setIsVisible(false)}
                                icon={<X className="w-4 h-4 text-white" />}
                                className="hover:bg-white/20"
                            />
                        </div>
                    </div>
                </div>
            )
            }
        </section>
    )
}
export default PromoBar;