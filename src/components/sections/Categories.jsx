import puffers from "../../assets/images/Puffers.png";
import jackets from "../../assets/images/jackets.png";
import gilets from "../../assets/images/Gilets.png";
import rainwear from "../../assets/images/Rainwear.png";
import { Link } from "react-router-dom";

const cats = [
    { img: puffers, name: "Puffers", path:"/puffers" },
    { img: jackets, name: "Bombers", path:"/bombers" },
    { img: puffers, name: "Light weight jackets", path:"/jackets" },
    { img: gilets, name: "Gilets", path:"/gilets" },
    { img: jackets, name: "Coats", path:"/coats" },
    { img: rainwear, name: "Rainwear", path:"/rainwear" },
];

function Categories() {
    return (
        <section className="categories">
        <div className="container mx-auto">
            <div className="max-w-[1200px] w-full py-20 flex flex-col gap-[40px] px-4">
                <div className="w-full flex items-center justify-center">
                    <p className="font-bold text-[28px] whitespace-nowrap leading-[42px] text-center text-text">
                        Shop by Categories
                    </p>
                </div>
                <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-y-6">
                    {cats.map((cat) => (
                        <div key={cat.name} className="flex flex-col items-center gap-3 w-1/2 md:w-auto">
                            <Link to={cat.path}>
                            <img src={cat.img} alt={cat.name} className="w-[140px] h-[140px] hover:scale-90 transition-transform duration-300 rounded-full object-cover" />
                            </Link>
                            <p className="font-medium text-sm leading-[21px] text-text">
                                {cat.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
}

export default Categories;