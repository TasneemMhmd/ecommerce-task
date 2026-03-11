import MobileMenu from "./MobileMenu";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

function Header() {
    return (
        <div>
            <nav className="w-full h-[77px] py-5 px-6 lg:px-[120px] border-b border-border flex items-center relative">
                <div className="max-w-[1200px] w-full flex items-center justify-between mx-auto">
                    <div className="flex items-center gap-3">
                        <MobileMenu />
                        <a href="#"><p className="font-bold text-text text-2xl leading-9 tracking-[-0.5px]">VisioCreate.</p></a>
                    </div>
                    <NavLinks />
                    <NavIcons />
                </div>
            </nav>
        </div>
    );
};
export default Header;