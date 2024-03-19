"use client"

import React from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
type Props = {
    label: string;
    iconSrc: string;
    href: string;
}


const SideBarItem = ({ label, iconSrc, href }: Props) => {

    const pathname = usePathname();
    const active = pathname === href;


    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className='justify-start h-[52px]' asChild>
            <Link href={href}>
                <Image
                    src={iconSrc}
                    alt={label}
                    height={32}
                    width={32}
                    className='mr-5' />

                {label}
            </Link>
        </Button>
    )
}

export default SideBarItem