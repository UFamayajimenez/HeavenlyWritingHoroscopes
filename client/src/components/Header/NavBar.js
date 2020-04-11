import React, { useState } from 'react';
import './NavBar.css';
 import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {

    //navbar changes based on what user is logged in

    //admin navbar
    // if(props.clientState === 2) {
    //     return (
    //         <Navbar bg="dark" expand="lg" variant="dark" >
    //         <Navbar.Brand href="/admin/users">Heavenly Writing</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="mr-auto">
    //                 <Nav.Link href="/admin/users">Users</Nav.Link>
    //                 <Nav.Link href="/admin/database">Database</Nav.Link>
    //                 <Nav.Link href="/admin/overview">Overview</Nav.Link>
    //                 <Nav.Link href="/admin/statistics">Statistics</Nav.Link>
    //                 <Nav.Link href="/admin/settings">Settings</Nav.Link>
    //                 <Nav.Link href="/admin/signout" style={{color: "red"}}>Log Out</Nav.Link>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    //     );
    // }




    // //User navbar
    // else if(props.client === 1) {
    //     return (
    //         <Navbar bg="dark" expand="lg" variant="dark" >
    //             <Navbar.Brand href="/client/todays-report">Heavenly Writing</Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="mr-auto">
    //                     <Nav.Link href="/client/todays-report">Today's Report</Nav.Link>
    //                     <Nav.Link href="/client/settings">Settings</Nav.Link>
    //                     <Nav.Link href="/client/signout" style={{color: "red"}}>Log Out</Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Navbar>
    //     )
    // }
    // else {

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



//    }

};

export default NavBar;
