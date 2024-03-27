"use client"
import { challenges, challengeOptions, challengeProgress } from "@/db/schema";
import { useState } from "react";
import Header from "./header";

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
    return (
        <Header
            hearts={hearts}
            percentage={percentage}
            hasActiveSubscription={!!userSubscription?.isActive}
        />

    )
}

export default Quiz