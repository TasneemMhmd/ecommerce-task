import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import AnimatedLink from "../ui/AnimatedLink";

const navItems = [
    { label: "Home", href: "#" },
    { label: "Shop", items: ["Cat1", "Cat2", "Cat3"] },
    { label: "Product", items: ["Pro1", "Pro2", "Pro3"] },
    { label: "Contact Us", href: "#" },
];

function NavLinks() {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <div className="hidden md:flex w-[337.06px] h-[21px] gap-8">
            {navItems.map((item) =>
                item.items ? (
                    <DropdownMenu
                        key={item.label}
                        label={item.label}
                        items={item.items}
                        isOpen={openMenu === item.label}
                        onEnter={() => setOpenMenu(item.label)}
                        onLeave={() => setOpenMenu(null)}
                    />
                ) : (
                    <a key={item.label} href={item.href} className="group">
                        <AnimatedLink label={item.label} className="font-medium text-[14px] leading-[21px] text-text" groupHover />
                    </a>
                )
            )}
        </div>
    );
}
export default NavLinks;