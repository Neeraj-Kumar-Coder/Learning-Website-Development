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
        setText(text.toUpperCase());
    }

    const lowerHandler = () => {
        setText(text.toLowerCase());
    }

    const spaceHandler = () => {
        setText(text.split(/[ ]+/g).join(" "));
    }

    const copyHander = () => {
        let textArea = document.getElementById("text-here");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showData("success", "Text Copied to clipboard!");
    }

    const detailsHandler = () => {
        let value = text.length;
        setCharacters(value);
        value = text.split(/[ ]+/g).join(" ").split(" ").length;
        setWords(value);
        value *= 0.005;
        setReadingTime(value);
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="text-center">{props.heading}</h1>
                    <textarea className="form-control" id="text-here" rows="10" onChange={changeHandler} value={text}></textarea>
                    <button type="button" className="btn btn-dark mx-1 my-2" onClick={upperHandler}>Convert To UPPERCASE</button>
                    <button type="button" className="btn btn-dark mx-1 my-2" onClick={lowerHandler}>Convert To lowercase</button>
                    <button type="button" className="btn btn-dark mx-1 my-2" onClick={spaceHandler}>Remove Extra Spaces</button>
                    <button type="button" className="btn btn-dark mx-1 my-2" onClick={copyHander}>Copy To Clipboard</button>
                    <button type="button" className="btn btn-dark mx-1 my-2" onClick={detailsHandler}>Get Details</button>
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