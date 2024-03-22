import { getUserProgress } from '@/db/queries'
import StickWrapper from '@/components/stick-wrapper'
import FeedWrapper from '@/components/feed-wrapper'
import React from 'react'
import { Header } from './header'
import UserProgress from '@/components/user-progress'
import { redirect } from 'next/navigation'


const LearnPage = async () => {

    const userProgressData = getUserProgress()

    const [userProgress] = await Promise.all([userProgressData])

    if (!userProgress || !userProgress.activeCourse) {
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
                <div className="space-y-4">


                </div>
            </FeedWrapper>
        </div >
    )
}

export default LearnPage