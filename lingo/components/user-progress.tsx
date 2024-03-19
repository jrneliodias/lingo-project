import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';

type Props = {
    activeCourse: { imageSrc: string, title: string };
    hearts: number
    points: number;
    hasActiveSubscription: boolean
}
const UserProgress = ({ points,
    hearts,
    hasActiveSubscription,
    activeCourse }: Props) => {
    return (
        <div className='flex items-center justify-between gap-x-2'>
            <Link href={"/courses"}>
                <Button variant={'ghost'}>
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className='rounded-md border'
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href={'/shop'}>
                <Button variant={'ghost'} className='text-orange-500'>
                    <Image src="/points.svg" height={28} width={28} alt='Points' className='mr-2' />
                    {points}
                </Button>
            </Link>
            <Link href={'/shop'}>
                <Button variant={'ghost'} className='text-rose-500'>
                    <Image src="/heart.svg" height={22} width={22} alt='hearts' className='mr-2' />
                    {hasActiveSubscription ? <InfinityIcon className='h-4 w-4 stroke-[3]' /> : hearts}
                </Button>
            </Link>


        </div>
    )
}

export default UserProgress