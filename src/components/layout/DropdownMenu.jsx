import { ChevronDown } from "lucide-react";

function DropdownMenu({ label, items, isOpen, onEnter, onLeave }) {
    return (
        <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="flex items-center gap-1 cursor-pointer">
                <p className="font-medium text-[14px] text-text">{label}</p>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </div>
            <div className={`absolute top-full left-0 pt-3 w-fit transition-all duration-200 z-50 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="bg-white border border-border rounded-xl shadow-lg overflow-hidden">
                    {items.map((item) => (
                        <a key={item} href="#" className="block px-4 py-2.5 text-[13px] font-medium text-text hover:bg-gray-50 hover:text-black transition-colors duration-150">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default DropdownMenu;