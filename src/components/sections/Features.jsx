import shippingIcon from "../../assets/icons/shipping.svg";
import moneyIcon from "../../assets/icons/money.svg";
import secureIcon from "../../assets/icons/secure.svg";
import supportIcon from "../../assets/icons/support.svg";

const features = [
    { id: 1, icon: shippingIcon, title: "Free Shipping", description: "Order above $200" },
    { id: 2, icon: moneyIcon, title: "Money-back", description: "30 days guarantee" },
    { id: 3, icon: secureIcon, title: "Secure Payments", description: "Secured by Stripe" },
    { id: 4, icon: supportIcon, title: "24/7 Support", description: "Phone and Email support" }
];

function Features() {
    return (
        <div className="w-full mx-auto flex justify-center px-6">
            <div className="w-full max-w-[1152px] border-t pt-[60px] pb-[60px] grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                {features.map(feature => (
                    <div key={feature.id} className="group flex flex-col items-center gap-[11.8px]">
                        <div className="relative w-[48px] h-[48px] flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-text opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" />
                            <div className="absolute inset-0 rounded-full border border-border" />
                            <img src={feature.icon} alt={feature.title} className="relative z-10 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <p className="font-semibold text-[16px] leading-[24px] text-center text-text">{feature.title}</p>
                        <p className="font-normal text-[13px] leading-[19.5px] text-center text-textLight">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;