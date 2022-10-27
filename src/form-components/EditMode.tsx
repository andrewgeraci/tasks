import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function isStudentString() {
        if (isStudent) {
            return "is";
        }
        return "is not";
    }
    return (
        <div>
            {
                <Form.Check
                    type="switch"
                    id="is-student-check"
                    label="Enable Edit Mode"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            }
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Are You a Student?"
                    checked={isStudent}
                    disabled={editMode === false}
                    onChange={() => setIsStudent(!isStudent)}
                />
            </div>
            <Form.Group controlId="formEditMode">
                <Form.Label>Enter Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
                    disabled={editMode === false}
                />
            </Form.Group>
            <div>
                {name} {isStudentString()} a student.
            </div>
        </div>
    );
}
