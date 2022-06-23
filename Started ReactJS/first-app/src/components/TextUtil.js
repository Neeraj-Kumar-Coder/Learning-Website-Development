import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextUtil(props) {
    const [text, setText] = useState("");
    const [characters, setCharacters] = useState(0);
    const [words, setWords] = useState(0);
    const [readingTime, setReadingTime] = useState(0);

    const changeHandler = (element) => {
        setText(element.target.value);
    }

    const upperHandler = () => {
        if (text === "") {
            props.showData("danger", "No text is present! Please enter some of it.");
            return;
        }
        setText(text.toUpperCase());
    }

    const lowerHandler = () => {
        if (text === "") {
            props.showData("danger", "No text is present! Please enter some of it.");
            return;
        }
        setText(text.toLowerCase());
    }

    const capitalizeHandler = () => {
        if (text === "") {
            props.showData("danger", "No text is present! Please enter some of it.");
            return;
        }
        let textArr = text.split(" ");
        textArr.forEach(function (ele, index, myThis) {
            myThis[index] = myThis[index].charAt(0).toUpperCase() + myThis[index].slice(1).toLowerCase();
        });
        setText(textArr.join(" "));
    }

    const spaceHandler = () => {
        if (text === "") {
            props.showData("danger", "No text is present! Please enter some of it.");
            return;
        }
        setText(text.split(/[ ]+/g).join(" "));
    }

    const copyHander = () => {
        if (text === "") {
            props.showData("danger", "No text is present! Please enter some of it.");
            return;
        }
        navigator.clipboard.writeText(text);
        props.showData("success", "Text Copied to clipboard!");
    }

    const detailsHandler = () => {
        if (text === "") {
            props.showData("danger", "No text is present! Please enter some of it.");
            return;
        }
        let value = text.length;
        setCharacters(value);
        let temp = text.split(/\s+/g).join(" ").split(" ");
        value = temp.length;
        if (temp.at(-1) === "")
            value--;
        setWords(value);
        value *= 0.005;
        setReadingTime(value);
    }

    const clearHandler = () => {
        if (window.confirm("This will clear the text completely!")) {
            setText("");
            setCharacters(0);
            setWords(0);
            setReadingTime(0);
        }
    }
    const getMode = current => current === "black" ? "dark" : "light";

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="text-center">{props.heading}</h1>
                    <textarea className="form-control" id="text-here" rows="10" onChange={changeHandler} value={text}></textarea>
                    <button type="button" disabled={text.length === 0} className={`btn btn-${getMode(props.mode.color)} mx-1 my-2`} onClick={upperHandler}>Convert To UPPERCASE</button>
                    <button type="button" disabled={text.length === 0} className={`btn btn-${getMode(props.mode.color)} mx-1 my-2`} onClick={lowerHandler}>Convert To lowercase</button>
                    <button type="button" disabled={text.length === 0} className={`btn btn-${getMode(props.mode.color)} mx-1 my-2`} onClick={capitalizeHandler}>Capitalize Text</button>
                    <button type="button" disabled={text.length === 0} className={`btn btn-${getMode(props.mode.color)} mx-1 my-2`} onClick={spaceHandler}>Remove Extra Spaces</button>
                    <button type="button" disabled={text.length === 0} className={`btn btn-${getMode(props.mode.color)} mx-1 my-2`} onClick={copyHander}>Copy To Clipboard</button>
                    <button type="button" disabled={text.length === 0} className={`btn btn-${getMode(props.mode.color)} mx-1 my-2`} onClick={detailsHandler}>Get Details</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-danger mx-1 my-2" onClick={clearHandler}>Clear</button>
                </div>
            </div>
            <div className="container">
                <h2>Analysis of your text</h2>
                <hr />
                <strong>Character: </strong><span>{characters}</span>
                <br />
                <strong>Words: </strong><span>{words}</span>
                <br />
                <strong>Average reading time: </strong><span>{readingTime} minutes</span>
                <hr />
                <h3>Preview</h3>
                <pre>{text}</pre>
            </div>
        </>
    )
}

TextUtil.propTypes = { heading: PropTypes.string };
TextUtil.defaultProps = { heading: "Enter Text To Analyze" };