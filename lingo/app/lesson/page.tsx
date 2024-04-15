import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation';
import Quiz from './quiz';

const LessonPage = async () => {
    const lessonData = getLesson()
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

export default LessonPage