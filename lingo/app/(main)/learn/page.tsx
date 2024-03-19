import StickWrapper from '@/components/stick-wrapper'
import FeedWrapper from '@/components/feed-wrapper'
import React from 'react'
import { Header } from './header'
import UserProgress from '@/components/user-progress'

const LearnPage = () => {
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickWrapper>
                <UserProgress
                    activeCourse={{ title: "Spanish", imageSrc: "es.svg" }}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false} />
            </StickWrapper>
            <FeedWrapper>
                <Header title={'Spanish'} />
                <div className="space-y-4">


                </div>
            </FeedWrapper>
        </div >
    )
}

export default LearnPage