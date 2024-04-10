import { cn } from "@/lib/utils";
import Image from "next/image";

type ResultsProps = {
    value: number;
    variant: "points" | "hearts"
}

export const ResultCard = ({ value, variant }: ResultsProps) => {
    const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg"
    return (
        <div className={cn(
            "rounded-2xl border-2 w-full",
            variant === "points" && "bg-orange-400 border-orange-400",
            variant === "hearts" && "bg-rose-500 border-rose-500",

        )}>
            <div className={cn(
                "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
                variant === "points" && "bg-orange-400 ",
                variant === "hearts" && "bg-rose-500",
            )}>
                {variant === "hearts" ? "Hearts Left" : "Total xp"}
            </div>
            <div className={cn(
                "rounded-[14px] bg-white items-center flex justify-center p-6 font-bold text-lg",
                variant === "points" && "text-orange-400 ",
                variant === "hearts" && "text-rose-500",
            )}>
                <Image
                    alt="icon"
                    height={30}
                    width={30}
                    src={imageSrc}
                    className="mr-1.5" />
                {value}
            </div>

        </div>
    )
}