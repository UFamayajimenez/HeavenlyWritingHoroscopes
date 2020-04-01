import React, { useState } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPage from './views/Admin/AdminPage';
import ClientPage from './views/Client/ClientPage';

const App = (props) => {

    // 0: not logged in
    // 1: admin logged in
    // 2: client logged in


    return (
        <div>

                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/SignUp" component={SignUp} />
                    <Route exact path="/">
                        <Redirect to="/Home" />
                    </Route>
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/client" component={ClientPage} />
                    <Route component={NotFound}/>

                </Switch>
        </div>
    );
};
export default App;
