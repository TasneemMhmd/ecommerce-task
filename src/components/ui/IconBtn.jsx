function IconBtn({ onClick, icon, size, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-badge transition-colors duration-200 ${className}`}
        >
            {icon}
        </button>
    );
}
export default IconBtn;