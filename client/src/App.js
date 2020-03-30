import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './views/Home/Home.css'
import './components/Header/NavBar.css'
import './components/SignUp/SignUp.css'

const App = (props) => {
    return (
        <div>
            <NavBar />
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/SignUp" component={SignUp} />
                    <Route exact path="/">
                        <Redirect to="/Home" />
                    </Route>
                    <Route component={NotFound}/>
                </Switch>
        </div>
    );
};
export default App;