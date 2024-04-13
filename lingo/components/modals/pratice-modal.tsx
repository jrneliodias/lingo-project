"use client"

import { usePraticesModal } from "@/store/use-pratice-modal"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogContent,
    DialogTitle,
} from "../ui/dialog"
import { Button } from "../ui/button"

export const PraticeModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const { isOpen, close } = usePraticesModal();

    useEffect(() => setIsClient(true), [])
    if (!isClient) return null


    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src={"/heart.svg"}
                            alt="Bad mascot"
                            height={80}
                            width={80} />
                    </div>

                    <DialogTitle className="text-center font-bold text-2xl">
                        Pratice lesson
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Use pratice lessons to regain hearts and points. You cannot loose hearts or points in pratice lessons.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">

                        <Button
                            variant={'primary'}
                            className="w-full"
                            size={'lg'}
                            onClick={close}>
                            I understand
                        </Button>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )

}