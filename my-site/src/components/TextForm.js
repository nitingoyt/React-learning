    import React, { useState } from "react";

    export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "warning");
    };
    const handleOnchange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    return (
        <>
        <div
            className="container"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea
                className="form-control"
                value={text}
                onChange={handleOnchange}
                style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
                }}
                id="myBox"
                rows="10"
            />
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>
            Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>
            Convert to Lowercase
            </button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>
            Clear
            </button>
        </div>
        <div
            className="container my-3"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
            <h1>Your text summary</h1>
            <p>
            {text.split(" ").length} words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Mintues read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
    }
