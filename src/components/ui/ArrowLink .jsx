import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ArrowLink ({ to = "/", label = "Shop Now", className = "text-text" }) {
    return (
        <Link to={to} className={`group w-fit flex items-center gap-1 font-medium text-base leading-6 underline ${className}`}>
            {label}
            <ArrowRight className={`transition-transform duration-200 group-hover:translate-x-1 text-inherit`} size={13} />
        </Link>
    );
}

export default ArrowLink ;