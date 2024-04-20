import { SimpleForm, Create, TextInput, required, ReferenceInput, NumberInput, SelectInput } from "react-admin";

export const ChallengeCreate = () => {
    return (
        <Create>
            <SimpleForm >
                <TextInput source="question" validate={[required()]} label="Question" />
                <ReferenceInput source="lessonId" reference="lessons" />
                <SelectInput source="type" validate={[required()]} label="Type" choices={[
                    {
                        id: "SELECT",
                        name: "SELECT"
                    },
                    {
                        id: "ASSIST",
                        name: "ASSIST"
                    },
                ]} />
                <NumberInput source="order" validate={[required()]} label="Order" />
            </SimpleForm>
        </Create>
    )
}