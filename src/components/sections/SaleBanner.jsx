import ArrowLink from "../ui/ArrowLink ";
import saleBanner from "../../assets/images/sale-banner.png";

function SaleBanner() {
    return (
        <section className="sale-banner">
            <div className="container-fluid mx-auto">
                <div className="w-full h-auto md:h-[400px] flex flex-col md:flex-row">
                    <img
                        src={saleBanner}
                        alt="Sale Banner"
                        className="w-full md:w-1/2 h-[260px] md:h-[400px] object-cover"
                    />
                    <div className="w-full md:w-1/2 h-auto md:h-[400px] px-6 py-[60px] md:p-[60px] bg-badge flex flex-col justify-center gap-4">
                        <p className="font-semibold text-xs leading-[18px] tracking-[1px] uppercase text-secondary">
                            SALE UP TO 35% OFF
                        </p>
                        <p className="font-bold text-4xl leading-[43.2px] text-text">
                            HUNDREDS of <br />New lower prices!
                        </p>
                        <p className="font-normal text-base leading-6 text-textLight2">
                            Hurry up!!! Winter is coming.
                        </p>
                        <ArrowLink to="/shop" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SaleBanner;