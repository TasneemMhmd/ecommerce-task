const cats = [
    { img: "/src/assets/images/Puffers.png", name: "Puffers" },
    { img: "/src/assets/images/jackets.png", name: "Bombers" },
    { img: "/src/assets/images/Puffers.png", name: "Lightweight jackets" },
    { img: "/src/assets/images/Gilets.png", name: "Gilets" },
    { img: "/src/assets/images/jackets.png", name: "Coats" },
    { img: "/src/assets/images/Rainwear.png", name: "Rainwear" },
];

function Categories() {
    return (
        <div className="w-full">
            <div className="max-w-[1200px] w-full py-[80px] flex flex-col gap-[40px] mx-auto px-4">
                <div className="w-full flex items-center justify-center">
                    <p className="font-bold text-[28px] whitespace-nowrap leading-[42px] text-center text-text">
                        Shop by Categories
                    </p>
                </div>
                <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-y-6">
                    {cats.map((cat) => (
                        <div key={cat.name} className="flex flex-col items-center gap-3 w-1/2 md:w-auto">
                            <img src={cat.img} alt={cat.name} className="w-[140px] h-[140px] rounded-full object-cover" />
                            <p className="font-medium text-[14px] leading-[21px] text-text">
                                {cat.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;