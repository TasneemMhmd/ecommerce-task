import youtube from "../../assets/icons/youtube.svg";
import Facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import visa from "../../assets/images/visa.png";
import amex from "../../assets/images/amex.png";
import master from "../../assets/images/master.png";
import paypal from "../../assets/images/paypal.png";
import pay from "../../assets/images/pay.png";
import { ArrowRight } from "lucide-react";

const socialIcons = [
    { name: "instagram", icon: instagram },
    { name: "Facebook", icon: Facebook },
    { name: "youtube", icon: youtube },
];
const pages = ["Home", "Shop", "Products", "Articles", "Contact Us"];
const Info = ["Shipping Policy", "Return & Refund", "Support", "FAQs"];
const PaymentMethods = [
    { name: "visa", icon: visa },
    { name: "amex", icon: amex },
    { name: "master", icon: master },
    { name: "paypal", icon: paypal },
    { name: "pay", icon: pay },
];

function Footer() {
    return (
        <div className="w-full bg-badge">
            <footer className="max-w-[1440px] mx-auto pt-[80px] px-6 lg:px-[120px] pb-[40px]">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-[59.99px]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px]">
                        <div className="col-span-2 lg:col-span-1 flex flex-col gap-[24px]">
                            <p className="font-bold text-[24px] leading-[36px] text-text">
                                VisioCreate.
                            </p>
                            <div className="flex flex-col gap-[24.57px]">
                                <p className="font-normal text-[14px] leading-[25.2px] text-textLight2">
                                    43111 Hai Trieu street,<br />
                                    District 1, HCMC<br />
                                    Vietnam
                                </p>
                                <p className="font-normal text-[14px] leading-[25.2px] text-textLight2">
                                    84-756-3237
                                </p>
                            </div>
                            <div className="flex gap-[16px]">
                                {socialIcons.map((item) => (
                                    <img key={item.name} src={item.icon} alt={item.name} className="w-5 h-5" />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <p className="font-semibold text-[16px] leading-[24px] text-text">
                                Page
                            </p>
                            <div className="flex flex-col gap-[12px]">
                                {pages.map((page) => (
                                    <a href="#" key={page} className="w-fit font-normal text-[14px] leading-[21px] text-textLight2">
                                        {page}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <p className="font-semibold text-[16px] leading-[24px] text-text">
                                Info
                            </p>
                            <div className="flex flex-col gap-[12px]">
                                {Info.map((info) => (
                                    <a href="#" key={info} className="w-fit font-normal text-[14px] leading-[21px] text-textLight2">
                                        {info}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex flex-col gap-[24px]">
                            <p className="font-semibold text-[16px] leading-[24px] text-text">
                                Join Newsletter
                            </p>
                            <p className="font-normal text-[14px] leading-[25.2px] text-nowrap text-textLight2">
                                Subscribe our newsletter to get more deals, new<br /> products and promotions
                            </p>
                            <div className="w-full max-w-[344px] h-[42px] rounded-[24px] border relative flex items-center">
                                <input
                                    placeholder="Enter your email"
                                    className="w-full h-[41px] pl-[16px] pr-[40px] rounded-[24px] outline-none bg-white text-[14px]"
                                />
                                <button className="absolute right-[4px] w-[32px] h-[32px] rounded-full bg-secondary flex items-center justify-center group transition-all duration-200 hover:scale-110 shrink-0">
                                    <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-[24px] border-t">
                        <p className="font-normal text-[12px] leading-[18px] text-textLight text-center md:text-left">
                            Copyright © 2023 VisioCreate. All rights reserved.
                        </p>
                        <div className="flex gap-[16px]">
                            <a href="#" className="font-normal text-[12px] leading-[18px] text-textLight">Privacy Policy</a>
                            <a href="#" className="font-normal text-[12px] leading-[18px] text-textLight">Terms & Conditions</a>
                        </div>
                        <div className="flex gap-[8px] items-center">
                            {PaymentMethods.map((method) => (
                                <img key={method.name} src={method.icon} alt={method.name} className="h-[20px] w-auto object-contain" />
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;