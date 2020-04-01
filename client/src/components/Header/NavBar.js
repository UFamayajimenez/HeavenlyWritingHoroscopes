import React from 'react';
import './NavBar.css';
 import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {

    //navbar changes based on what user is logged in

    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="/Home">Heavenly Writing</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignUp">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
    
};

export default NavBar;
