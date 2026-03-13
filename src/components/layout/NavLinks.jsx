import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import AnimatedLink from "../ui/AnimatedLink";

const navItems = [
    { label: "Home", path: "/" },
    {
        label: "Shop",
        items: [
            { label: "Cat1", path: "/category/1" },
            { label: "Cat2", path: "/category/2" },
            { label: "Cat3", path: "/category/3" },
        ],
    },
    {
        label: "Product",
        items: [
            { label: "Pro1", path: "/product/1" },
            { label: "Pro2", path: "/product/2" },
            { label: "Pro3", path: "/product/3" }
        ]
    },
    { label: "Contact Us", path: "/contact" },
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
                    <AnimatedLink
                        label={item.label}
                        to={item.path}
                        className="font-medium text-[14px] leading-[21px] text-text"
                        groupHover
                    />
                )
            )}
        </div>
    );
}
export default NavLinks;
