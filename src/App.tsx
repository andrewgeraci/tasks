import React from "react";
//import { Button } from "react-bootstrap";
//import { Container } from "react-bootstrap";
//import { Row } from "react-bootstrap";
//import { Col } from "react-bootstrap";
//import { Rectangle } from "react-shapes";

import "./App.css";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is header text</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Andrew Geraci
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            {<ColoredBox></ColoredBox>}
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
        </div>
    );
}

export default App;
