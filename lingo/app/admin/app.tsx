"use client"

import { Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { CourseList } from "./course/list"
import { CourseCreate } from "./course/create"
import { CourseEdit } from "./course/edit"
import { UnitList } from "./unit/list"
import { UnitCreate } from "./unit/create"
import { UnitEdit } from "./unit/edit"

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
        </Admin>
    )
}

export default App 