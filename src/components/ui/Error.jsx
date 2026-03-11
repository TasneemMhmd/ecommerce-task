import { CircleX } from "lucide-react";

function Error(){
    return(
        <div className="flex flex-col items-center justify-center gap-2">
            <CircleX className="text-red-400" size={32} />
            <p className="text-red-400 font-bold">An error occurred, please try again later.</p>
        </div>
    )
}
export default Error;