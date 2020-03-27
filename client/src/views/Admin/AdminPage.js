import React, {useState} from 'react';
import AdminNavBar from './AdminNavBar';
import UserList from './UserList';
import './AdminPage.css'
import { Route, Switch} from 'react-router-dom';
import Settings from './Settings';
import Database from './Database';
import Overview from './Overview';
import Statistics from './Statistics';


const AdminPage = (props) => {

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <div>
                {/* <AdminNavBar/> */}
            </div>
            
            <Switch>
                <Route exact path="/admin/users" component={UserList}/>
                <Route exact path="/admin/database" component={Database}/>
                <Route exact path="/admin/overview" component={Overview}/>
                <Route exact path="/admin/statistics" component={Statistics}/>
                <Route exact path="/admin/settings" component={Settings}/>
            </Switch>
        </div>
    );
}

export default AdminPage;