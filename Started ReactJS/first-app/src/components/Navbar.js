import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">{props.title}</a>
                <button type="button" className="btn btn-dark">Dark</button>
            </div>
        </nav>
    );
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "Magic Text" };