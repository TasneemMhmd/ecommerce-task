function IconBtn({ onClick, icon, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full flex items-center justify-center hover:shadow-[0_0_0_8px] hover:shadow-badge transition-all duration-200 ${className}`}>
            {icon}
        </button>
    );
}
export default IconBtn;