import React, { useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const ClientNavBar = () => {

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
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Navbar.Brand href="/client/todays-report">Heavenly Writing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/client/todays-report">Today's Report</Nav.Link>
                    <Nav.Link href="/client/settings">Settings</Nav.Link>
                    <Nav.Link href="/client/signout" onClick={logOut} style={{color: "red"}}>Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default ClientNavBar;