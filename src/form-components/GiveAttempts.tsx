import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [req, setReq] = useState<string>("");
    function updateReq(event: React.ChangeEvent<HTMLInputElement>) {
        setReq(event.target.value);
    }
    function updateAttempts() {
        const num = Number(req);
        if (!isNaN(num)) {
            setAttempts(attempts + num);
        }
    }
    return (
        <div>
            <Button onClick={() => updateAttempts()}>gain</Button>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control type="number" value={req} onChange={updateReq} />
            </Form.Group>
            Attempts remaining: {attempts}
        </div>
    );
}
