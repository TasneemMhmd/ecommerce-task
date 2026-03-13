import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import search from "../../assets/icons/search.svg";

const navItems = [
    { label: "Profile", href: "#" },
    { label: "Home", href: "#" },
    { label: "Shop", items: ["Cat1", "Cat2", "Cat3"] },
    { label: "Product", items: ["Pro1", "Pro2", "Pro3"] },
    { label: "Contact Us", href: "#" },
];

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (searchOpen && inputRef.current) inputRef.current.focus();
    }, [searchOpen]);

    return (
        <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {isOpen && (
                <div className="absolute top-[77px] left-0 w-full bg-white border-b border-border z-50 flex flex-col px-6 py-4">
                    <div className="border-b border-gray-100">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className={`w-full flex items-center gap-2 font-medium text-[14px] py-3 px-2 rounded transition-all duration-150
                                ${searchOpen
                                    ? "text-black bg-gray-100"
                                    : "text-text hover:bg-gray-50"
                                }`}
                        >
                            <Search className="w-[18px] h-[18px]" />
                            Search
                        </button>
                        {searchOpen && (
                            <div className="pb-3 px-2">
                                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:border-gray-400 transition-colors duration-150">
                                    <img
                                        src={search}
                                        alt="search"
                                        className="w-[20px] h-[20px]"
                                    />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder="Search for anything..."
                                        className="flex-1 bg-transparent text-[13px] text-text placeholder-gray-400 outline-none"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {navItems.map((item) =>
                        item.items ? (
                            <div key={item.label} className="border-b border-gray-100">
                                <button
                                    onClick={() =>
                                        setOpenMenu(openMenu === item.label ? null : item.label)
                                    }
                                    className={`w-full flex items-center justify-between font-medium text-[14px] py-3 px-2 rounded transition-all duration-150
                                        ${openMenu === item.label
                                            ? "text-black bg-gray-100"
                                            : "text-text hover:bg-gray-50"
                                        }`}
                                >
                                    {item.label}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openMenu === item.label && (
                                    <div className="flex flex-col pb-2 pl-4 pr-2">
                                        {item.items.map((sub) => (
                                            <a
                                                key={sub}
                                                href="#"
                                                onClick={() => setActiveLink(sub)}
                                                className={`text-[13px] py-2 px-2 rounded transition-all duration-150
                                                    ${activeLink === sub
                                                        ? "text-black font-semibold bg-gray-100 pl-3"
                                                        : "text-text hover:text-black hover:bg-gray-50 hover:pl-3"
                                                    }`}
                                            >
                                                {sub}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveLink(item.label)}
                                className={`block font-medium text-[14px] py-3 border-b border-gray-100 px-2 rounded transition-all duration-150
                                    ${activeLink === item.label
                                        ? "text-black bg-gray-100 border-l-2 border-l-black pl-3"
                                        : "text-text hover:bg-gray-50 hover:pl-3"
                                    }`}
                            >
                                {item.label}
                            </a>
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default MobileMenu;
