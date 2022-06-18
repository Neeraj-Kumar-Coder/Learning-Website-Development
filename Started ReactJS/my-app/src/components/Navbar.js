import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const [btntext, setBtntext] = useState("Enable Dark Mode");

    const [mode, Setmode] = useState({
        color: "white",
        backgroundColor: "black"
    });

    const modeSetter = () => {
        if (mode.backgroundColor === "white") {
            Setmode({
                backgroundColor: "black",
                color: "white"
            });
            setBtntext("Enable Dark Mode");
        }
        else {
            Setmode({
                backgroundColor: "white",
                color: "black"
            });
            setBtntext("Enable Light Mode");
        }

        const allElements = Array.from(document.querySelectorAll("*"));
        allElements.forEach((element) => {
            element.style.backgroundColor = mode.backgroundColor;
            element.style.color = mode.color;
        });
    }
    return (
        <nav className="navbar bg-light" style={{ padding: 0, margin: "8px" }}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">{props.title}</a>
                <button className="btn" type="submit" style={mode} onClick={modeSetter}>{btntext}</button>
            </div>
        </nav >
    );
}

Navbar.propTypes = { title: PropTypes.string.isRequired }

Navbar.defaultProps = { title: "Default Title" }
