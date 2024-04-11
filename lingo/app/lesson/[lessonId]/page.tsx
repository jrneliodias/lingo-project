import { getLesson, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation';
import Quiz from '../quiz';

type Props = {
    params: {
        lessonId: number
    }
}

const LessonIdPage = async ({ params }: Props) => {
    const lessonData = getLesson(params.lessonId)
    const userProgressData = getUserProgress();

    const [userProgress, lesson] = await Promise.all([userProgressData, lessonData])

    if (!lesson || !userProgress) {
        redirect("/learn")
    }
    const initialPercentage = lesson.challenges
        .filter((challenge) => challenge.completed)
        .length / lesson.challenges.length * 100


    return (
        <Quiz
            initialLessonId={lesson.id}
            initialPercentage={initialPercentage}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgress.hearts}
            userSubscription={undefined} //TODO: Add user subscription
        >

        </Quiz>
    )
}

export default LessonIdPage