import Link from "../ui/Link";

const articles = [
    { image: "/src/assets/images/article1.png", title: "2023 Holiday Gift Guide" },
    { image: "/src/assets/images/article2.png", title: "2023 Holiday Gift Guide" },
    { image: "/src/assets/images/article3.png", title: "2023 Holiday Gift Guide" }
];

function Articles() {
    return (
        <div className="w-full mx-auto flex justify-center">
            <div className="w-full max-w-[1200px] pt-[80px] pb-[80px] flex flex-col gap-[40px] px-6">
                <div className="w-full flex justify-between items-center">
                    <p className="font-bold text-[28px] leading-[42px] tracking-[0px] text-text whitespace-nowrap">
                        Latest Articles
                    </p>
                    <div className="flex gap-[4px]">
                        <Link label="View All" />
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {articles.map((article, index) => (
                        <div key={index} className="flex flex-col gap-[16px]">
                            <div className="w-full rounded-[8px] overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-[288px] object-cover" />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-medium text-[16px] leading-[24px] text-text">
                                    {article.title}
                                </p>
                                <Link label="Read More" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Articles;