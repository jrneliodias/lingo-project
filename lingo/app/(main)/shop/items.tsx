"use client"

import { refillHearts } from "@/actions/user-progress"
import { createStripeUrl } from "@/actions/user-subscription"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTransition } from "react"
import { toast } from "sonner"

type ItemsProps = {
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

const POINTS_TO_REFILL = 10;


export const Items = ({
    hearts,
    points,
    hasActiveSubscription
}: ItemsProps) => {
    const [peding, startTransition] = useTransition()

    const onRefillHearts = () => {
        if (peding || hearts === 5 || points < POINTS_TO_REFILL) {
            return
        }
        startTransition(() => {
            refillHearts()
                .catch(() =>
                    toast.error("Something went wrong")
                )
        })
    }

    const onUpgrade = () => {
        startTransition(() => {
            createStripeUrl()
                .then((response) => {
                    if (response?.data) {
                        window.location.href = response.data;
                    }
                })
                .catch(() => toast.error("Something went wrong."))
        })
    }
    return (
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image
                    src={"heart.svg"}
                    alt="heart"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refill hearts
                    </p>
                </div>
                <Button
                    onClick={onRefillHearts}
                    disabled={
                        peding
                        || hearts === 5
                        || points < POINTS_TO_REFILL}>
                    {

                        hearts === 5
                            ? "full"
                            : (<div className="flex items-center">
                                <Image
                                    src={"/points.svg"}
                                    alt="points"
                                    height={20}
                                    width={20}
                                />
                                <p>
                                    {POINTS_TO_REFILL}
                                </p>
                            </div>)}

                </Button>
            </div>
            <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
                <Image
                    src={"unlimited.svg"}
                    alt="unlimited"
                    height={60}
                    width={60}

                />
                <div className="flex flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Unlimited hearts
                    </p>
                </div>
                <Button
                    onClick={onUpgrade}
                    disabled={
                        peding
                    }
                >
                    {hasActiveSubscription ? "settings" : "upgrade"}

                </Button>
            </div>
        </ul >
    )
}