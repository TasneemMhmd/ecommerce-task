import article1 from "../../assets/images/article1.png";
import article2 from "../../assets/images/article2.png";
import article3 from "../../assets/images/article3.png";
import HoverImg from "../ui/HoverImg";
import ArrowLink from "../ui/ArrowLink ";
import { Link } from "react-router-dom";

const articles = [
    { image: article1, title: "2023 Holiday Gift Guide" },
    { image: article2, title: "2023 Holiday Gift Guide" },
    { image: article3, title: "2023 Holiday Gift Guide" },
];

function Articles() {
    return (
        <div className="w-full mx-auto flex justify-center">
            <div className="w-full max-w-[1200px] pt-[80px] pb-[80px] flex flex-col gap-[40px] px-6">
                <div className="w-full flex justify-between items-center">
                    <p className="font-bold text-[28px] leading-[42px]  text-text whitespace-nowrap">
                        Latest Articles
                    </p>
                    <div className="flex gap-[4px]">
                        <ArrowLink label="View All" to="/articles" />
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {articles.map((article, index) => (
                        <div key={index} className="flex flex-col gap-[16px]">
                            <div className="group w-full rounded-[8px] overflow-hidden">
                                <HoverImg src={article.image} alt={article.title} className="w-full h-[288px]" />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-medium text-[16px] leading-[24px] text-text">
                                    {article.title}
                                </p>
                                <ArrowLink label="Read More" to="article" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Articles;