import hero from "../../assets/images/hero.png";

function HeroSection() {
  return (
    <div className="bg-primary w-full max-w-[1440px] h-[600px] px-[144px] max-lg:px-[24px] overflow-hidden">
      <div
        className="max-w-[1152px] h-full flex items-center mx-auto
                      max-lg:flex-col max-lg:gap-[32px] max-lg:pt-[40px]"
      >
        <div
          className="max-w-[596px] h-[291.58px] flex flex-col gap-[24px] shrink-0
                        max-lg:h-auto max-lg:pr-0 max-lg:items-start max-lg:text-left max-lg:w-full"
        >
          <div className="max-w-[556px] h-[141.58px] pb-[0.58px] flex items-center text-left max-lg:h-auto">
            <p
              className="w-[556px] text-white font-extrabold text-[64px] leading-[70.4px] tracking-[-1px]
                          max-lg:w-full max-lg:text-[36px] max-lg:leading-[44px]"
            >
              Unveil Your Style,
              <br />
              Elevate Every Day
            </p>
          </div>
          <div className="max-w-[556px] h-[62px] pb-[8px] flex items-center text-left opacity-90 max-lg:h-auto">
            <p
              className="w-full text-white font-normal text-[18px] leading-[27px]
                          max-lg:text-[16px]"
            >
              Everyone needs a good winter jacket.
              <br />
              Find yours with our collection and more.
            </p>
          </div>
          <button className="max-w-[112.59px] h-[40px] px-[24px] bg-white flex items-center justify-center whitespace-nowrap mr-auto">
            <span className="text-text font-medium text-[14px] leading-[100%]">
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