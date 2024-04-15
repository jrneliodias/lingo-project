import {
    getCourseProgress,
    getLessonPercentage,
    getUnits,
    getUserProgress,
    getUserSubscription
} from '@/db/queries'
import StickWrapper from '@/components/stick-wrapper'
import FeedWrapper from '@/components/feed-wrapper'
import React from 'react'
import { Header } from './header'
import UserProgress from '@/components/user-progress'
import { redirect } from 'next/navigation'
import Unit from './unit'
import Promo from '@/components/promo'


const LearnPage = async () => {

    const userProgressData = getUserProgress()
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage()
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription()


    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData
    ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }
    if (!courseProgress) {
        redirect("/courses")
    }

    const isPro = !!userSubscription?.isActive

    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={!!userSubscription?.isActive} />
                {!isPro && (<Promo />)}
            </StickWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />
                {units.map((unit) => (

                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson}
                            activeLessonPercentage={lessonPercentage}>

                        </Unit>
                    </div>
                ))}


            </FeedWrapper>
        </div >
    )
}

export default LearnPage