import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const AdminNavBar = () => {

    // const onSignOut = () => {
    //     do something here about signing out
    // }

    const logOut = () => {
        sessionStorage.setItem("loggedStatus", 0);
        console.log("Logged Status: " + sessionStorage.getItem("loggedStatus"));
    }

    if (sessionStorage.getItem("loggedStatus") == 0){
        return <Redirect to='/Home' />
    }

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
                        <a className="nav-link" href="/admin/users">Users <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/database">Database</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/overview">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/statistics">Statistics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/settings">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/create">Create Email</a>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={logOut}>Log Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminNavBar;