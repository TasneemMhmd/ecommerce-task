function AnimatedLink({ label, className = "" }) {
    return (
        <p className={`relative w-fit after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-text after:transition-all after:duration-300 hover:after:w-full ${className}`}>
            {label}
        </p>
    );
}
export default AnimatedLink;