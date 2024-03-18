import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='hidden lg:block border-t-2 p-2 border-slate-200 h-20 w-full'>
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size={'lg'} variant={'ghost'} className='w-full'>
                    <Image src={"/es.svg"} alt='Spain' height={32} width={40} className='mr-4 rounded-md' />
                    Spain
                </Button>
                <Button size={'lg'} variant={'ghost'} className='w-full'>
                    <Image src={"/fr.svg"} alt='France' height={32} width={40} className='mr-4 rounded-md' />
                    France
                </Button>
                <Button size={'lg'} variant={'ghost'} className='w-full'>
                    <Image src={"/it.svg"} alt='Italian' height={32} width={40} className='mr-4 rounded-md' />
                    Italian
                </Button>
                <Button size={'lg'} variant={'ghost'} className='w-full'>
                    <Image src={"/jp.svg"} alt='Japonese' height={32} width={40} className='mr-4 rounded-md' />
                    Japan
                </Button>
                <Button size={'lg'} variant={'ghost'} className='w-full'>
                    <Image src={"/hr.svg"} alt='Croatian' height={32} width={40} className='mr-4 rounded-md' />
                    Croatian
                </Button>
            </div>
        </footer>
    )
}
