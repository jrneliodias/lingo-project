import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries'
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
    const userSubscriptionData = getUserSubscription();

    const [userProgress, lesson, userSubscription] = await Promise.all([userProgressData, lessonData, userSubscriptionData])

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
            userSubscription={userSubscription}
        >

        </Quiz>
    )
}

export default LessonIdPage