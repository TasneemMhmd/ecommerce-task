import { ArrowRight } from "lucide-react";

function Link({ href = "#", label = "Shop Now", color = "text-text" }) {
    return (
        <a href={href} className={`group w-fit flex items-center gap-1 font-medium text-[16px] leading-[24px] underline text-${color}`}>
            {label}
            <ArrowRight className={`transition-transform duration-200 group-hover:translate-x-1 text-${color}`} size={13} />
        </a>
    );
}

export default Link;