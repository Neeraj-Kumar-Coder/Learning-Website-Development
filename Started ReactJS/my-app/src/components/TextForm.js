import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");

    const changeHandler = (element) => {
        setText(element.target.value);
    }

    const upperHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="more" rows="7" value={text} onChange={changeHandler}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperHandler}>Conver to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={lowerHandler}>Conver to lowercase</button>
        </>
    );
}

TextForm.propTypes = { heading: PropTypes.string }

TextForm.defaultProps = { heading: "Enter Your Text To Analyse Below" }