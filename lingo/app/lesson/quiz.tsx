"use client"
import { challenges, challengeOptions, challengeProgress } from "@/db/schema";
import { useState, useTransition } from "react";
import Header from "./header";
import QuestionBubble from "./question-bubble";
import Challenge from "./challenge";
import Footer from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";

interface QuizProps {
    initialLessonId: number;
    initialPercentage: number;
    initialHearts: number;
    userSubscription: any;

    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[]
    })[];

}
const Quiz = ({ initialPercentage, initialHearts, initialLessonChallenges, initialLessonId, userSubscription }: QuizProps) => {
    const [peding, startTransition] = useTransition()
    const [hearts, setHearts] = useState(initialHearts)
    const [percentage, setPercentage] = useState(initialPercentage)
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
        return uncompletedIndex === -1 ? 0 : uncompletedIndex

    })
    const [selectedOption, setSelectedOptions] = useState<number>()
    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none")

    const challenge = challenges[activeIndex]
    const options = challenge?.challengeOptions ?? []

    const onNext = () => {
        setActiveIndex((current) => current + 1)
    }

    const onContinue = () => {
        if (!selectedOption) return

        if (status === "wrong") {
            setStatus("none")
            setSelectedOptions(undefined)
            return
        }

        if (status === "correct") {
            onNext()
            setStatus("none")
            setSelectedOptions(undefined)
            return
        }

        const correctOption = options.find((option) => option.correct)

        if (!correctOption) return

        if (correctOption.id === selectedOption) {
            startTransition(() => {
                upsertChallengeProgress(challenge.id)
                    .then((response) => {
                        if (response?.error === "hearts") {
                            console.error("Missing hearts.")
                            return
                        }

                        setStatus("correct")
                        setPercentage((prev) => prev + 100 / challenges.length)
                        if (initialPercentage === 100) {
                            setHearts((prev) => Math.min(prev + 1, 5))
                        }
                    })
                    .catch(() => toast.error("Something went wrong. Please try again."))
            })
        } else {
            console.error("Incorrect option!")
        }


    }
    const onSelect = (id: number | undefined) => {
        if (status !== "none") return
        setSelectedOptions(id)
    }
    const title = challenge.type === "ASSIST" ? "Select the correct meaning"
        : challenge.question


    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className=" lg:min-h-[350px] lg:w-[600px] w-full   px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl  text-center lg:text-start  font-bold text-neutral-700 ">
                            {title}
                        </h1>
                        <div>
                            {challenge.type === "ASSIST" && (
                                <QuestionBubble question={challenge.question} />
                            )}
                            <Challenge
                                options={options}
                                onSelect={onSelect}
                                status={status}
                                selectedOption={selectedOption}
                                type={challenge.type}

                            />
                        </div>

                    </div>
                </div>
            </div>
            <Footer
                disabled={!selectedOption}
                status={status}
                onCheck={onContinue}

            />
        </>

    )
}

export default Quiz