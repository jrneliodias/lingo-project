
import { Menu } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Sidebar } from "@/components/sidebar";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className='p-0 z-[100]' side={'left'}>
                <Sidebar />
            </SheetContent>

        </Sheet>
    )
}

export default MobileSidebar