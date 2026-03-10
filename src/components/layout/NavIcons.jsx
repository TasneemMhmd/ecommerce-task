import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import cart from "../../assets/icons/cart.svg";

function NavIcons() {
    return (
        <div className="flex items-center gap-[20px]">
            <img src={search} alt="search" className="hidden md:block w-[20px] h-[20px] cursor-pointer hover:opacity-60 active:scale-95 transition-all duration-200" />
            <img src={profile} alt="profile" className="hidden md:block w-[20px] h-[20px] cursor-pointer hover:opacity-60 active:scale-95 transition-all duration-200" />
            <img src={cart} alt="cart" className="w-[20px] h-[20px] cursor-pointer hover:opacity-60 active:scale-95 transition-all duration-200" />
        </div>
    );
}
export default NavIcons;