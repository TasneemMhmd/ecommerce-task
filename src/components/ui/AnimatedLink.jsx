import { Link } from "react-router-dom";

function AnimatedLink({ to="/", label, className = "" }) {
    return (
        <Link to={to}>
        <p className={`relative w-fit after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-text after:transition-all after:duration-300 hover:after:w-full ${className}`}>
            {label}
        </p>
        </Link>
    );
}
export default AnimatedLink;