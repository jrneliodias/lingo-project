
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { quests } from '@/constants'
import { Progress } from "./ui/progress"



type QuestProps = {
    points: number
}

const Quests = ({ points }: QuestProps) => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-x-2">
                    <h3 className="font-bold text-lg">
                        Quests
                    </h3>
                    <Button
                        variant={'primaryOutline'}
                        size={'sm'}
                    >
                        <Link href={"/quests"}>
                            view all
                        </Link>
                    </Button>
                </div>

            </div>

            <ul className="w-full">
                {quests.map((quest) => {
                    const progress = (points / quest.value) * 100

                    return (
                        <div className="flex items-center w-full p-4 gap-x-3 "
                            key={quest.title}
                        >
                            <Image
                                src={"/points.svg"}
                                alt='Points'
                                width={40}
                                height={40}
                            />
                            <div className="flex flex-col gap-y-2 w-full">
                                <p className="text-neutral-700 text-xl font-bold">
                                    {quest.title}
                                </p>
                                <Progress
                                    value={progress}
                                    className='h-2'

                                />
                            </div>

                        </div>
                    )
                })}
            </ul>

        </div>
    )
}

export default Quests