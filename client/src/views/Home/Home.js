import React from 'react';
import './Home.css';
import {Router, Redirect} from 'react-router-dom';
const  Home = (props) => {

    const handleSubmit = (e) => {
        e.persist();

        //this code is NOT to be used in final release;
        //it is purely a test for setting client states
        //current issue is needing to keep the state persistent even after page refreshes and loads
        var username = e.target[0].value;
        var password = e.target[1].value;
        if(username == 'heavenlywriting@gmail.com' && password == "DakotaFanClub") {
            props.setClientState(1);    
        }
        else{
            props.setClientState(2);
        }
        e.preventDefault();
    }

    return (
        <div className="home">
        <div className="sidenav">
            <div className="login-main-text">
                <h1>Login to your Heavenly Writing account to access your personal horoscope</h1>
            </div>
        </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        <p>
                            Don't have an account? Sign up <a href="SignUp">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
