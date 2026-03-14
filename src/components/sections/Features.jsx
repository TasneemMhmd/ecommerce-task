import Shipping from "../../assets/icons/shipping.svg?react";
import Money from "../../assets/icons/money.svg?react";
import Secure from "../../assets/icons/secure.svg?react";
import Support from "../../assets/icons/support.svg?react";

const features = [
    { id: 1, icon: Shipping, title: "Free Shipping", description: "Order above $200" },
    { id: 2, icon: Money, title: "Money-back", description: "30 days guarantee" },
    { id: 3, icon: Secure, title: "Secure Payments", description: "Secured by Stripe" },
    { id: 4, icon: Support, title: "24/7 Support", description: "Phone and Email support" }
];

function Features() {
    return (
        <section className="features">
            <div className="container mx-auto">
                <div className="w-full border-t py-[60px] grid grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map(feature => {
                        const Icon = feature.icon;
                        return (
                        <div key={feature.id} className="group flex flex-col items-center gap-[11.8px]">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-text opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" />
                                <div className="absolute inset-0 rounded-full border border-border" />
                                <Icon className="relative z-10 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="font-semibold text-base leading-6 text-center text-text">{feature.title}</p>
                            <p className="font-normal text-[13px] leading-[19.5px] text-center text-textLight">{feature.description}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Features;