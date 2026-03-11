import { ArrowRight } from "lucide-react";

function SaleBanner() {
    return (
        <div className="w-full">
            <div className="w-full max-w-[1440px] h-auto md:h-[400px] flex flex-col md:flex-row mx-auto">
                <img src="/src/assets/images/sale-banner.png" alt="Sale Banner" className="w-full md:w-[660px] h-[260px] md:h-[400px] object-cover" />
                <div className="w-full md:w-[780px] h-auto md:h-[400px] px-6 py-[60px] md:p-[60px] bg-[#F4F4F4] flex flex-col justify-center">                    <div className="w-full md:w-[660px] h-[34px] pb-[16px]">
                    <p className="h-[18px] font-semibold text-[12px] leading-[18px] tracking-[1px] uppercase text-secondary">
                        SALE UP TO 35% OFF
                    </p>
                </div>
                    <div className="w-full md:w-[660px] h-[102.38px]">
                        <p className="w-[315.84px] h-[87px] font-bold text-[36px] leading-[43.2px] text-nowrap text-text">
                            HUNDREDS of <br />New lower prices!
                        </p>
                    </div>
                    <div className="w-full md:w-[660px] h-[56px] pb-[32px]">
                        <p className="w-full md:w-[660px] h-[24px] font-normal text-[16px] leading-[24px] text-[#555555]">
                            Hurry up!!! Winter is coming.
                        </p>
                    </div>
                    <div className="w-full md:w-[660px] h-[24px]">
                        <a href="#" className="group w-fit h-[24px] flex items-center gap-1 font-medium text-[16px] leading-[24px] underline text-text">
                            Shop Now
                            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1 text-text" size={13} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleBanner;