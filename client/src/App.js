import React, { useState } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPage from './views/Admin/AdminPage';
import ClientPage from './views/Client/ClientPage';

const App = (props) => {

    // 0: not logged in
    // 1: admin logged in
    // 2: client logged in
    const [clientState, setClientState] = useState(0);

    return (
        <div>
            <NavBar clientState={clientState}/>
                <Switch>
                    <Route exact path="/Home" render={(props) => <Home setClientState={setClientState}/>} />
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