import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const ClientNavBar = () => {

    // const onSignOut = () => {
    //     do something here about signing out
    // }

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
                        <a className="nav-link" href="/client/todays-report">Today's Report <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/client/Settings">Settings</a>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Log Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default ClientNavBar;