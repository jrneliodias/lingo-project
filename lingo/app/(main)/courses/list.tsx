"use client"

import { courses } from '@/db/schema'
import React from 'react'
import Card from './card';
type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId: number;
}

const List = ({ courses, activeCourseId }: Props) => {
    return (
        <div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
            {courses.map((course) => (
                <Card
                    title={course.title}
                    id={course.id}
                    key={course.id}
                    imageSrc={course.imageSrc}
                    onClick={() => { }}
                    active={course.id === activeCourseId}
                    disabled={false}
                />
            ))}
        </div>
    )
}

export default List