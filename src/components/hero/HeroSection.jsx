import { Link } from "react-router-dom";
import heroD from "../../assets/images/heroD.png";
import hero from "../../assets/images/hero.png";

function HeroSection() {
  return (
    <>
      <div className="bg-primary md:hidden flex flex-col">
        <div className="px-6 pt-10 pb-8 flex flex-col gap-6">
          <p className="text-white font-extrabold text-4xl leading-[44px] tracking-[-1px]">
            Unveil Your Style,<br />Elevate Every Day
          </p>
          <p className="text-white font-normal text-base leading-[27px] opacity-90">
            Everyone needs a good winter jacket.<br />
            Find yours with our collection and more.
          </p>
          <Link to="/shop">
            <button className="group h-10 px-6 bg-white flex items-center justify-center whitespace-nowrap hover:bg-text transition-colors duration-300">
              <span className="text-text font-medium text-sm group-hover:text-white transition-colors duration-300">
                Shop Now
              </span>
            </button>
          </Link>
        </div>
        <img src={hero} alt="hero" className="object-cover h-[450px] object-right" />
      </div>

      <div className="hidden md:block relative overflow-hidden">
        <div className="relative pt-[41.3%] w-full h-full">
          <img className="absolute inset-0 w-full h-full object-cover" src={heroD} alt="hero" />
        </div>
        <div className="container absolute inset-0 z-10 h-full mx-auto pointer-events-none">
          <div className="h-full flex items-center mx-auto">
            <div className="max-w-[596px] flex flex-col gap-6 shrink-0">
              <p className="w-[556px] text-white font-extrabold text-[64px] leading-[70.4px] tracking-[-1px]">
                Unveil Your Style,<br />Elevate Every Day
              </p>
              <p className="text-white font-normal text-lg leading-[27px] opacity-90">
                Everyone needs a good winter jacket.<br />
                Find yours with our collection and more.
              </p>
              <Link to="/shop" className="pointer-events-auto">
                <button className="group h-10 px-6 bg-white flex items-center justify-center whitespace-nowrap hover:bg-text transition-colors duration-300">
                  <span className="text-text font-medium text-sm group-hover:text-white transition-colors duration-300">
                    Shop Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;