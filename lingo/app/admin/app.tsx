"use client"

import { Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { CourseList } from "./course/list"
import { CourseCreate } from "./course/create"
import { CourseEdit } from "./course/edit"

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
        </Admin>
    )
}

export default App 