import { getLesson, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation';
import Quiz from './quiz';

const LessonPage = async () => {
    const lessonData = getLesson()
    const userProgressData = getUserProgress();

    const [userProgress, lesson] = await Promise.all([userProgressData, lessonData])

    if (!lesson || !userProgress) {
        redirect("/learn")
    }
    const initialPorcentage = lesson.challenges
        .filter((challenge) => challenge.completed)
        .length / lesson.challenges.length * 100


    return (
        <Quiz
            initialLessonId={lesson.id}
            initialPorcentage={initialPorcentage}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgress.hearts}
            userSubscription={undefined}
        >

        </Quiz>
    )
}

export default LessonPage