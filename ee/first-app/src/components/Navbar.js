import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const getMode = current => current === "black" ? "dark" : "light";
    return (
        <nav className={`navbar navbar-expand-lg bg-${getMode(props.mode.background)}`}>
            <div className="container-fluid">
                <Link to="/" className={`navbar-brand text-${getMode(props.mode.color)}`}>{props.title}</Link>
                <button className={`navbar-toggler bg-${getMode(props.mode.color)}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon navbar-${getMode(props.mode.color)}`}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link active text-${getMode(props.mode.color)}`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link text-${getMode(props.mode.color)}`}>About</Link>
                        </li>
                    </ul>
                    <button type="button" className={`btn btn-${getMode(props.mode.color)}`} onClick={props.changeMode}>{`Switch to ${getMode(props.mode.color)} mode`}</button>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = { title: PropTypes.string, mode: PropTypes.object };
Navbar.defaultProps = { title: "Magic Text", mode: { background: "black", color: "white" } };