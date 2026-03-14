import Search from "../../assets/icons/search.svg?react";
import Profile from "../../assets/icons/profile.svg?react";
import Cart from "../../assets/icons/cart.svg?react";
import { useCart } from "../../hooks/useCart";
import IconBtn from "../ui/IconBtn";

function NavIcons() {
    const { toggleCart, itemsCount } = useCart();
    return (
        <div className="flex items-center gap-5">
            <IconBtn icon={<Search className="w-5 h-5" />} className="hidden md:flex" />
            <IconBtn icon={<Profile className="w-5 h-5" />} className="hidden md:flex" />
            <div className="relative">
                <IconBtn
                    onClick={toggleCart}
                    icon={<Cart className="w-5 h-5" />}
                />
                {itemsCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-text flex items-center justify-center pb-[1px]">
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