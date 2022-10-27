import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet",
        "Pink"
    ];
    const [colorIndex, setColorIndex] = useState(0);
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(0)}
                id="colors-check-red"
                label={<span style={{ backgroundColor: "Red" }}>Red</span>}
                value="Red"
                checked={colorIndex === 0}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(1)}
                id="colors-check-orange"
                label={
                    <span style={{ backgroundColor: "Orange" }}>Orange</span>
                }
                value="Orange"
                checked={colorIndex === 1}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(2)}
                id="colors-check-yellow"
                label={
                    <span style={{ backgroundColor: "Yellow" }}>Yellow</span>
                }
                value="Yellow"
                checked={colorIndex === 2}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(3)}
                id="colors-check-green"
                label={<span style={{ backgroundColor: "Green" }}>Green</span>}
                value="Green"
                checked={colorIndex === 3}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(4)}
                id="colors-check-blue"
                label={<span style={{ backgroundColor: "Blue" }}>Blue</span>}
                value="Blue"
                checked={colorIndex === 4}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(5)}
                id="colors-check-indigo"
                label={
                    <span style={{ backgroundColor: "Indigo" }}>Indigo</span>
                }
                value="Indigo"
                checked={colorIndex === 5}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(6)}
                id="colors-check-violet"
                label={
                    <span style={{ backgroundColor: "Violet" }}>Violet</span>
                }
                value="Violet"
                checked={colorIndex === 6}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={() => setColorIndex(7)}
                id="colors-check-pink"
                label={<span style={{ backgroundColor: "Pink" }}>Pink</span>}
                value="Pink"
                checked={colorIndex === 7}
            />
            <div>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: COLORS[colorIndex] }}
                >
                    {COLORS[colorIndex]}
                </span>
            </div>
        </div>
    );
}
