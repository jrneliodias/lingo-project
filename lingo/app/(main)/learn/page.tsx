import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from '@/db/queries'
import StickWrapper from '@/components/stick-wrapper'
import FeedWrapper from '@/components/feed-wrapper'
import React from 'react'
import { Header } from './header'
import UserProgress from '@/components/user-progress'
import { redirect } from 'next/navigation'
import Unit from './unit'


const LearnPage = async () => {

    const userProgressData = getUserProgress()
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage()
        ; const unitsData = getUnits();

    const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }
    if (!courseProgress) {
        redirect("/courses")
    }
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false} />
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
                            activeLessonPercentage={0}></Unit>
                    </div>
                ))}


            </FeedWrapper>
        </div >
    )
}

export default LearnPage