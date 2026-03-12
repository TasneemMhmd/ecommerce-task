const features = [
    { id: 1, icon: "/src/assets/icons/shipping.svg", title: "Free Shipping", description: "Order above $200" },
    { id: 2, icon: "/src/assets/icons/money.svg", title: "Money-back", description: "30 days guarantee" },
    { id: 3, icon: "/src/assets/icons/secure.svg", title: "Secure Payments", description: "Secured by Stripe" },
    { id: 4, icon: "/src/assets/icons/support.svg", title: "24/7 Support", description: "Phone and Email support" }
];

function Features() {
    return (
        <div className="w-full mx-auto flex justify-center px-6">
            <div className="w-full max-w-[1152px] border-t pt-[60px] pb-[60px] grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                {features.map(feature => (
                    <div key={feature.id} className="flex flex-col items-center gap-[11.8px]">
                        <div className="w-[48px] h-[48px] rounded-full border border-[#EAEAEA] flex items-center justify-center">
                            <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                        </div>
                        <p className="font-semibold text-[16px] leading-[24px] text-center text-text">{feature.title}</p>
                        <p className="font-normal text-[13px] leading-[19.5px] text-center text-[#666666]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;