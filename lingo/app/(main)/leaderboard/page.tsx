import FeedWrapper from '@/components/feed-wrapper'
import Promo from '@/components/promo'
import StickyWrapper from '@/components/stick-wrapper'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import UserProgress from '@/components/user-progress'
import { getTopTenUsers, getUserProgress, getUserSubscription } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const LeaderboardPage = async () => {

    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()
    const leaderData = getTopTenUsers()
    const [userProgress,
        userSubscription,
        leaderboard
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
        leaderData])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }
    const isPro = !!userSubscription?.isActive
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />
                {!isPro && (<Promo />)}
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center space-y-6">
                    <Image
                        src={"/leaderboard.svg"}
                        width={90}
                        height={90}
                        alt='leaderboard'
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl ">
                        Leaderboard
                    </h1>
                    <p className="text-muted-foreground text-center text-lg ">
                        See where you stand among other learners in community.
                    </p>
                    <Separator className='mb-4 h-0.5 rounded-full' />
                    {leaderboard.map((userProgress, index) => (
                        <div key={userProgress.userId}
                            className='flex items-center w-full p-2 px-4 rounded-xl'
                        >
                            <p className='font-bold text-lime-700  mr-4'>
                                {index + 1}
                            </p>
                            <Avatar
                                className='border bg-green-500 h-12 w-12 ml-3 mr-6'
                            >
                                <AvatarImage
                                    className='object-cover'
                                    src={userProgress.userImageSrc}
                                />
                            </Avatar>
                            <p className='font-bold flex-1 text-neutral-800'>
                                {userProgress.userName}
                            </p>
                            <p className='text-muted-foreground'>
                                {userProgress.points} XP
                            </p>
                        </div>
                    ))}



                </div>
            </FeedWrapper>
        </div>
    )
}

export default LeaderboardPage