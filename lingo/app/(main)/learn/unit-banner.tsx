type UnitProps = {
    title: string;
    description: string
}

import { Button } from '@/components/ui/button';
import { NotepadText } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const UnitBanner = ({ title, description }: UnitProps) => {
    return (
        <div className='flex items-center justify-between w-full bg-green-500 rounded-xl text-white p-5'>
            <div className="space-y-2 5">
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-lg'>{description}</p>
            </div>
            <Link href={'/lesson'}>
                <Button variant={'secondary'} size={'lg'} className='hidden xl:flex border-2 border-b-4 active:border-b-2'>
                    <NotepadText className='mr-2' />
                    Continue
                </Button>

            </Link>

        </div>
    )
}

export default UnitBanner