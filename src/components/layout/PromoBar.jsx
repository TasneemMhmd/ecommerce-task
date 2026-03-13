import { X } from "lucide-react";
import { useState } from "react";
import IconBtn from "../ui/IconBtn";

function PromoBar() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            {isVisible && (
                <div className="w-full bg-primary border-b">
                    <div className="max-w-[1440px] mx-auto px-[24px] pt-[9px] pb-[10px] flex justify-center items-center">
                        <p className="text-[13px] leading-[19.5px] font-normal text-white">
                            📦 30% off storewide — Limited time! <span className="hidden md:inline">S
                                <a href="#"><span className="underline cursor-pointer">
                                    hop Now →
                                </span></a></span>
                        </p>
                        <div className="ml-2 md:absolute md:right-[24px]">
                            <IconBtn
                                onClick={() => setIsVisible(false)}
                                icon={<X className="w-4 h-4 text-white" />}
                                className="hover:bg-white/20"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default PromoBar;