function HoverImg({ src, alt, className = "" }) {
    return (
        <div className={`overflow-hidden rounded-[8px] ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
            />
        </div>
    );
}
export default HoverImg;