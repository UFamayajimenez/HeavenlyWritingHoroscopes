import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const AdminNavBar = () => {

    // const onSignOut = () => {
    //     do something here about signing out
    // }

    return ( 
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Navbar.Brand href="/admin/users">Heavenly Writing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/admin/users">Users</Nav.Link>
                    <Nav.Link href="/admin/database">Database</Nav.Link>
                    <Nav.Link href="/admin/overview">Overview</Nav.Link>
                    <Nav.Link href="/admin/statistics">Statistics</Nav.Link>
                    <Nav.Link href="/admin/settings">Settings</Nav.Link>
                    <Nav.Link href="/admin/create">Create Email</Nav.Link>
                    <Nav.Link href="/admin/signout" style={{color: "red"}}>Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AdminNavBar;