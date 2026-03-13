import { LoaderPinwheel } from "lucide-react";

function Loader(){
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <LoaderPinwheel className="animate-spin text-secondary" size={32} />
        </div>
    )
}
export default Loader;