import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid text-light">
                    <Link className="text-light navbar-brand" to="/">MetaNews</Link>
                    <button className="text-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-light navbar-toggler-icon"></span>
                    </button>
                    <div className="text-light collapse navbar-collapse" id="navbarNav">
                        <ul className="text-light navbar-nav">
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/general"> general </Link></li>
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/entertainment"> entertainment </Link></li>
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/technology"> technology </Link></li>
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/business"> business </Link></li>
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/science"> science </Link></li>
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/health"> health </Link></li>
                            <li className="text-light text-capitalize nav-item"><Link className="text-light nav-link" to="/sports"> sports </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;