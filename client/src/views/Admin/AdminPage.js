import React, {useState} from 'react';
import AdminNavBar from './AdminNavBar';
import UserList from './UserList';
import './AdminPage.css'
import { Route, Switch} from 'react-router-dom';
import Settings from './Settings';
import { Redirect } from 'react-router-dom';
import Database from './Database';
import Overview from './Overview';
import Statistics from './Statistics';
import CreateEmail from "./CreateEmail";


const AdminPage = (props) => {
    
    let admin = sessionStorage.getItem("name") || "Greetings";
    console.log(admin);

    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }

    const greeting = () => {
        console.log(props.location.pathname);
        if(props.location.pathname == "/admin") {
            return(
                <div className="adminBackground">
                    <div className="greetingtext">
                        <h1>Hello, {admin} </h1>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="adminPage">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <div>
                { <AdminNavBar/> }
            </div>

            <Switch>
                <Route exact path="/admin/users" component={UserList}/>
                <Route exact path="/admin/database" component={Database}/>
                <Route exact path="/admin/overview" component={Overview}/>
                <Route exact path="/admin/statistics" component={Statistics}/>
                <Route exact path="/admin/settings" component={Settings}/>
                <Route exact path="/admin/create" component={CreateEmail}/>
            </Switch>

            {greeting()}
        </div>
    );
}

export default AdminPage;
