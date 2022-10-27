import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    function updateEmoji() {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>Choose an Answer</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            The answer is {updateEmoji()}.
        </div>
    );
}
