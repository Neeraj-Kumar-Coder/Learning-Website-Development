import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid text-light">
                    <a className="text-light navbar-brand" href="/">MetaNews</a>
                    <button className="text-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-light navbar-toggler-icon"></span>
                    </button>
                    <div className="text-light collapse navbar-collapse" id="navbarNav">
                        <ul className="text-light navbar-nav">
                            <li className="text-light nav-item">
                                <a className="text-light nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="text-light nav-item">
                                <a className="text-light nav-link" href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;