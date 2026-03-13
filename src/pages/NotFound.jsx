import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
            <div className="flex flex-col items-center gap-2">
                <p style={{ fontSize: "120px", fontWeight: 700, lineHeight: 1, letterSpacing: "-4px" }}
                    className="text-primary">
                    404
                </p>
                <div className="w-16 h-[3px] bg-primary rounded-full" />
            </div>

            <Frown className="w-16 h-16 text-primary" strokeWidth={1.5} />

            <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-[22px] font-bold text-text">Page not found</p>
                <p className="text-[15px] text-textLight2 max-w-[400px]">
                    The page you're looking for doesn't exist or has been moved.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <Link
                    to="/"
                    className="h-[44px] px-6 border bg-primary text-white hover:border-primary hover:bg-white hover:text-primary font-medium text-[14px] flex items-center justify-center rounded-[4px] transition-all duration-200"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;