import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const ClientNavBar = () => {

    // const onSignOut = () => {
    //     do something here about signing out
    // }

    return ( 
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Navbar.Brand href="/client/todays-report">Heavenly Writing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/client/todays-report">Today's Report</Nav.Link>
                    <Nav.Link href="/client/settings">Settings</Nav.Link>
                    <Nav.Link href="/client/signout" style={{color: "red"}}>Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default ClientNavBar;