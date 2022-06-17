import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");
    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0);
    const [readingTime, setReadingTime] = useState(0);
    const [prevText, setPrevText] = useState("");

    const changeHandler = (element) => {
        setText(element.target.value);
    }

    const detailsHandler = () => {
        setWords(text.length);
        setCharacters(text.split(" ").length);
        setReadingTime((text.length * 0.005));
        setPrevText(text);
    }

    const upperHandler = () => {
        setText(text.toUpperCase());
    }

    const lowerHandler = () => {
        setText(text.toLowerCase());
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="more" rows="7" value={text} onChange={changeHandler}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={upperHandler}>Conver to UPPERCASE</button>
            <button className="btn btn-primary mx-1 my-1" onClick={lowerHandler}>Conver to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={detailsHandler}>Get Details</button>

            <div className="container">
                <h1 className='my-5'>Text Summary</h1>
                <strong>Words: </strong><span>{words}</span><br />
                <strong>Characters: </strong><span>{characters}</span><br />
                <strong>Average reading time (in minutes): </strong><span>{readingTime}</span><br />

                <h2 className='my-5'>Preview</h2>
                <code>{prevText}</code>
            </div>
        </>
    );
}

TextForm.propTypes = { heading: PropTypes.string }

TextForm.defaultProps = { heading: "Enter Your Text To Analyse Below" }