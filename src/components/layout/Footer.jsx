import Youtube from "../../assets/icons/youtube.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import visa from "../../assets/images/visa.png";
import amex from "../../assets/images/amex.png";
import master from "../../assets/images/master.png";
import paypal from "../../assets/images/paypal.png";
import pay from "../../assets/images/pay.png";
import { ArrowRight, Check } from "lucide-react";
import AnimatedLink from "../ui/AnimatedLink";
import { useState } from "react";

const socialIcons = [
    { name: "instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "youtube", icon: Youtube, href: "https://youtube.com" },
];
const pages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "Articles", path: "/articles" },
    { name: "Contact Us", path: "/contact" }
];
const Info = [
    { name: "Shipping Policy", path: "/shipping-policy" },
    { name: "Return & Refund", path: "/return-refund" },
    { name: "Support", path: "/support" },
    { name: "FAQs", path: "/faqs" }
];
const PaymentMethods = [
    { name: "visa", icon: visa },
    { name: "amex", icon: amex },
    { name: "master", icon: master },
    { name: "paypal", icon: paypal },
    { name: "pay", icon: pay },
];

function Footer() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email");
            return;
        }
        setError("");
        setSubmitted(true);
    };

    return (
        <footer className="footer bg-badge pt-20 pb-10 ">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-[59.99px]">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
                        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                            <p className="font-bold text-6 leading-[36px] text-text">
                                VisioCreate.
                            </p>
                            <div className="flex flex-col gap-[24.57px]">
                                <p className="font-normal text-sm leading-[25.2px] text-textLight2">
                                    43111 Hai Trieu street,<br />
                                    District 1, HCMC<br />
                                    Vietnam
                                </p>
                                <p className="font-normal text-sm leading-[25.2px] text-textLight2">
                                    84-756-3237
                                </p>
                            </div>
                            <div className="flex gap-4">
                                {socialIcons.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer hover:scale-110 transition-transform duration-200"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-6">
                            <p className="font-semibold text-4 leading-6 text-text">Page</p>
                            <div className="flex flex-col gap-[12px]">
                                {pages.map((page) => (
                                    <div key={page.name} className="group w-fit relative">
                                        <AnimatedLink
                                            to={page.path}
                                            label={page.name}
                                            className="font-normal text-sm leading-[21px] text-textLight2 group-hover:text-text transition-colors duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col gap-6 ">
                            <p className="font-semibold text-4 leading-6 text-text">Info</p>
                            <div className="flex flex-col gap-[12px]">
                                {Info.map((info) => (
                                    <div key={info.name} className="group w-fit relative">
                                        <AnimatedLink
                                            to={info.path}
                                            label={info.name}
                                            className="font-normal text-sm leading-[21px] text-textLight2 group-hover:text-text transition-colors duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                            <p className="font-semibold text-base leading-6 text-text">
                                Join Newsletter
                            </p>
                            <p className="font-normal text-sm max-w-[344px] leading-[25.2px] text-textLight2">
                                Subscribe our newsletter to get more deals, new products and promotions
                            </p>
                            {submitted ? (
                                <div className="flex items-center gap-2 text-secondary font-medium text-sm">
                                    <Check size={16} />
                                    Thanks for subscribing!
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <form onSubmit={handleSubmit} className="w-full max-w-[344px] h-[42px] rounded-3xl border relative flex items-center">                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your email"
                                        className="w-full h-[41px] px-4 py-2 rounded-3xl outline-none bg-white text-sm"
                                    />
                                        <button
                                            type="submit"
                                            className="absolute right-1 w-8 h-8 rounded-full bg-secondary flex items-center justify-center group transition-all duration-200"
                                        >
                                            <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                                        </button>
                                    </form>
                                    {error && (
                                        <p className="text-primary text-xs pl-4">{error}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t">
                        <p className="font-normal text-xs leading-[18px] text-textLight text-center md:text-left">
                            Copyright © 2023 VisioCreate. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: "Privacy Policy", path: "/privacy-policy" },
                                { name: "Terms & Conditions", path: "/terms-conditions" }
                            ].map((item) => (
                                <div key={item.name} className="group w-fit relative">
                                    <AnimatedLink
                                        to={item.path}
                                        label={item.name}
                                        className="font-normal text-xs leading-[18px] text-textLight group-hover:text-text transition-colors duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 items-center">
                            {PaymentMethods.map((method) => (
                                <img key={method.name} src={method.icon} alt={method.name} className="h-5 w-auto object-contain" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;