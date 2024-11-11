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
                    backgroundColor: props.mode === "dark" ? "#386571" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                    }}
                    id="myBox"
                    rows="10"
                />
                </div>
                <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleUpClick}>
                Convert to Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleDownClick}>
                Convert to Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={handleClearClick}>
                Clear
                </button>
            </div>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h1>Your text summary</h1>
                <p>
                {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
            </>
        ); 
        }
