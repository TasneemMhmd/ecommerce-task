import { LoaderPinwheel } from "lucide-react";

function Loader(){
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <LoaderPinwheel className="animate-spin text-primary" size={32} />
        <div className="text-primary font-bold">Loading...</div>
        </div>
    )
}
export default Loader;