"use client"

import { challenges, challengeOptions, challengeProgress } from "@/db/schema";


interface QuizProps {
    initialLessonId: number;
    initialPorcentage: number;
    initialHearts: number;
    userSubscription: any;

    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[]
    })[];

}
const Quiz = ({ initialPorcentage, initialHearts, initialLessonChallenges, initialLessonId, userSubscription }: QuizProps) => {
    return (
        <div> Quiz</div>
    )
}

export default Quiz