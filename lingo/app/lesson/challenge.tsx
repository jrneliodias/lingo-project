import { challengeOptions, challenges } from "@/db/schema"
import { cn } from "@/lib/utils"
import Card from "./card"

type ChallengeProps = {
    options: typeof challengeOptions.$inferInsert[]
    onSelect: (id: number | undefined) => void
    status: "correct" | "wrong" | "none"
    selectedOption?: number
    disable?: boolean
    type: typeof challenges.$inferSelect["type"]
}

const Challenge = ({
    options,
    onSelect,
    status,
    selectedOption,
    disable,
    type }: ChallengeProps) => {
    return (
        <div className={cn(
            "grid gap-2",
            type === "ASSIST" && "grid-cols-1",
            type === "SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fir,minmax(0,1fr))]",
        )}>
            {options.map((option, i) => (
                <Card
                    key={option.id}
                    id={option.id}
                    text={option.text}
                    imageSrc={option.imageSrc}
                    shortcut={`${i + 1}`}
                    selected={true || selectedOption === option.id}
                    onClick={() => onSelect(option.id)}
                    status={status}
                    audioSrc={option.audioSrc}
                    disabled={disable}
                    type={type}
                />

            ))}
        </div>
    )
}

export default Challenge