import { useNavigate } from "react-router-dom";
import hero from "../../assets/images/hero.png";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary w-full h-[600px] px-[144px] max-xl:px-[24px] overflow-hidden">
      <div
        className="max-w-[1152px] h-full flex items-center mx-auto
                      max-xl:flex-col max-xl:gap-[32px] max-xl:pt-[40px]"
      >
        <div
          className="max-w-[596px] h-[291.58px] flex flex-col gap-[24px] shrink-0
                        max-xl:h-auto max-xl:pr-0 max-xl:items-start max-xl:text-left max-xl:w-full"
        >
          <div className="max-w-[556px] h-[141.58px] pb-[0.58px] flex items-center text-left max-xl:h-auto">
            <p
              className="w-[556px] text-white font-extrabold text-[64px] leading-[70.4px] tracking-[-1px]
                          max-xl:w-full max-xl:text-[36px] max-xl:leading-[44px]"
            >
              Unveil Your Style,
              <br />
              Elevate Every Day
            </p>
          </div>
          <div className="max-w-[556px] h-[62px] pb-[8px] flex items-center text-left opacity-90 max-xl:h-auto">
            <p
              className="w-full text-white font-normal text-[18px] leading-[27px]
                          max-xl:text-[16px]"
            >
              Everyone needs a good winter jacket.
              <br />
              Find yours with our collection and more.
            </p>
          </div>
          <button onClick={() => navigate("/shop")} className="group max-w-[112.59px] h-[40px] px-[24px] bg-white flex items-center justify-center whitespace-nowrap mr-auto hover:bg-text transition-colors duration-300">
            <span className="text-text font-medium text-[14px] leading-[100%] group-hover:text-white transition-colors duration-300">
              Shop Now
            </span>
          </button>
        </div>
        <img src={hero} alt="hero" className="max-w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default HeroSection;