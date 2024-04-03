"use client"
import { challenges, challengeOptions, challengeProgress } from "@/db/schema";
import { useState } from "react";
import Header from "./header";
import QuestionBubble from "./question-bubble";

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

    const [hearts, setHearts] = useState(initialHearts)
    const [percentage, setPercentage] = useState(initialPercentage)
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
        return uncompletedIndex === -1 ? 0 : uncompletedIndex

    })

    const challenge = challenges[activeIndex]

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
                <div className="h-full bg-rose-400 flex items-center justify-center">
                    <div className=" lg:min-h-[350px] lg:w-[600px] w-full bg-yellow-500  px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl  text-center lg:text-start  font-bold text-neutral-700 ">
                            {title}
                        </h1>
                        <div>
                            {
                                challenge.type === "SELECT" && (
                                    <QuestionBubble question={challenge.question} />

                                )}
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Quiz