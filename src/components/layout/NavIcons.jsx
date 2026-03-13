import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import cart from "../../assets/icons/cart.svg";
import { useCart } from "../../hooks/useCart";
import IconBtn from "../ui/IconBtn";

function NavIcons() {
    const { toggleCart, itemsCount } = useCart();
    return (
        <div className="flex items-center gap-[20px]">
            <IconBtn icon={<img src={search} alt="search" className="w-[20px] h-[20px]" />} className="hidden md:flex" />
            <IconBtn icon={<img src={profile} alt="profile" className="w-[20px] h-[20px]" />} className="hidden md:flex" />
            <div className="relative">
                <IconBtn
                    onClick={toggleCart}
                    icon={<img src={cart} alt="cart" className="w-[20px] h-[20px]" />}
                />
                {itemsCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-[16px] h-[16px] rounded-full bg-text flex items-center justify-center pb-[1px]">
                        <span className="font-normal text-[10px] leading-[15px] text-center text-white">
                            {itemsCount}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
export default NavIcons;