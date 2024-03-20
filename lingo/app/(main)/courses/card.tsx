import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type CardProps = {
    title: string;
    id: number;
    imageSrc: string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
}



const Card = ({ title, id, imageSrc, onClick, disabled, active }: CardProps) => {
    return (
        <div onClick={() => onClick(id)}
            className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]", disabled && "pointer-events-none opacity-50")}>

            <div className="min-[24px] w-full flex items-center justify-end">
                {active && (
                    <div>
                        <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
                            <Check className="text-white stroke-[4] h-4 w-4" />
                        </div>
                    </div>
                )}
            </div>
            <Image src={imageSrc}
                alt={title}
                height={70}
                width={70}
                className="rounded-md drop-shadow-md border object-cover" />
            <div className="text-neutral-700 text-center font-bold mt-3">{title}</div>
        </div>
    )
}

export default Card