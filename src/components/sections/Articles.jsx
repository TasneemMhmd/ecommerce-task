import article1 from "../../assets/images/article1.png";
import article2 from "../../assets/images/article2.png";
import article3 from "../../assets/images/article3.png";
import HoverImg from "../ui/HoverImg";
import ArrowLink from "../ui/ArrowLink ";

const articles = [
    { image: article1, title: "2023 Holiday Gift Guide" },
    { image: article2, title: "2023 Holiday Gift Guide" },
    { image: article3, title: "2023 Holiday Gift Guide" },
];

function Articles() {
    return (
        <section className="articles">
        <div className="container mx-auto">
            <div className="w-full py-8 md:py-20 flex flex-col gap-10 px-6">
                <div className="w-full flex justify-between items-center">
                    <p className="font-bold text-[28px] leading-[42px]  text-text">
                        Latest Articles
                    </p>
                    <div className="flex gap-1">
                        <ArrowLink label="View All" to="/articles" />
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <article key={index} className="flex flex-col gap-4">
                            <div className="group w-full rounded-lg overflow-hidden">
                                <HoverImg src={article.image} alt={article.title} className="w-full h-[288px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-base leading-6 text-text">
                                    {article.title}
                                </p>
                                <ArrowLink label="Read More" to="article" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
}

export default Articles;