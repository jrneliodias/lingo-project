"use client"

import { Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"

import { CourseList } from "./course/list"
import { CourseCreate } from "./course/create"
import { CourseEdit } from "./course/edit"

import { UnitList } from "./unit/list"
import { UnitCreate } from "./unit/create"
import { UnitEdit } from "./unit/edit"

import { LessonList } from "./lesson/list"
import { LessonCreate } from "./lesson/create"
import { LessonEdit } from "./lesson/edit"

const dataProvider = simpleRestProvider("/api")

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="courses"
                list={CourseList}
                recordRepresentation={"title"}
                create={CourseCreate}
                edit={CourseEdit}
            />
            <Resource
                name="units"
                list={UnitList}
                recordRepresentation={"title"}
                create={UnitCreate}
                edit={UnitEdit}
            />
            <Resource
                name="lessons"
                list={LessonList}
                recordRepresentation={"title"}
                create={LessonCreate}
                edit={LessonEdit}
            />
        </Admin>
    )
}

export default App 