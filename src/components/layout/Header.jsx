import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

function Header() {
    return (
        <section className="nav sticky top-0 z-30 bg-white">
            <div className="container mx-auto px-6 md:px-auto">
                <nav className="w-full h-[77px] border-b border-border flex items-center relative">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <MobileMenu />
                            <Link to="/"><p className="font-bold text-text text-2xl leading-9 tracking-[-0.5px]">VisioCreate.</p></Link>
                        </div>
                        <NavLinks />
                        <NavIcons />
                    </div>
                </nav>
            </div>
        </section>
    );
};
export default Header;