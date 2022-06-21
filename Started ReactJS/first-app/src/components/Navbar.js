import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    const getMode = current => current === "black" ? "dark" : "light";
    return (
        <nav className={`navbar bg-${getMode(props.mode.background)}`}>
            <div className="container-fluid">
                <a href="/" className={`navbar-brand text-${getMode(props.mode.color)}`}>{props.title}</a>
                <button type="button" className={`btn btn-${getMode(props.mode.color)}`} onClick={props.changeMode}>{`Switch to ${getMode(props.mode.color)} mode`}</button>
            </div>
        </nav>
    );
}

Navbar.propTypes = { title: PropTypes.string, mode: PropTypes.object };
Navbar.defaultProps = { title: "Magic Text", mode: { background: "black", color: "white" } };