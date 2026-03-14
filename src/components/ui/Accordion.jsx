import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-t py-4 lg:border-0 lg:py-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between lg:cursor-default"
            >
                <p className="font-semibold text-base leading-6 text-text">{title}</p>
                <ChevronDown
                    className={`w-4 h-4 text-text transition-transform duration-300 lg:hidden ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 lg:max-h-none lg:mt-6 ${isOpen ? "max-h-[300px] mt-4" : "max-h-0 lg:max-h-none"}`}>
                {children}
            </div>
        </div>
    );
}
export default Accordion;