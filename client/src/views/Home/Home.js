import React from 'react';
import axios from 'axios';
import './Home.css';
import {Router, Redirect, withRouter} from 'react-router-dom';



    const handleSubmit = (e) => {
        e.persist();

    };

        //this code is NOT to be used in final release;
        //it is purely a test for setting client states
        //current issue is needing to keep the state persistent even after page refreshes and loads
        //var username = e.target[0].value;
        //var password = e.target[1].value;
        //if(username == 'heavenlywriting@gmail.com' && password == "DakotaFanClub") {
            //props.setClientState(1);
        //}
       // else{
           // props.setClientState(2);
        //}
        //e.preventDefault();
    //}
      
      //commented out by Amaya during merge of authentication w/ adminPage


        //intialization of form variables

const  Home = (props) => {

    const data = {
        email: '',
        password: ''
    };

    const onSubmit = (e) =>{
        axios.post('/api/users/login', data)
            .then( res => {
                console.log("Login was successful!");
                console.log(res);

                if (res.data.user.admin){
                    sessionStorage.setItem("name", res.data.user.name.first);
                    sessionStorage.setItem("loggedStatus", 2);
                    console.log("Logged Status: " + sessionStorage.getItem("loggedStatus"));
                    window.location.reload();
                }
                else {
                    sessionStorage.setItem("name", res.data.user.name.first);
                    sessionStorage.setItem("loggedStatus", 1);
                    console.log("Logged Status: " + sessionStorage.getItem("loggedStatus"));
                    window.location.reload();
                };
            })
            .catch ( err => {
                if (err.response){
                    if (err.response.data.email) {console.log(err.response.data.email)};
                    if (err.response.data.password) {console.log(err.response.data.password)};
                    if (err.response.data.emailnotfound) {console.log(err.response.data.emailnotfound)};
                    if (err.response.data.passwordincorrect) {console.log(err.response.data.passwordincorrect)};
                }
                console.log(err.response);
                console.log(err);
            });
        e.preventDefault();
    };

    if (sessionStorage.getItem("loggedStatus") == 1){
        return <Redirect to='/client' />
    } else if (sessionStorage.getItem("loggedStatus") == 2){
        return <Redirect to='/admin' />
    } else{
        return (
            <div className="home">
                <div className="sidenav">
                    <div className="home-login-main-text">
                        <h1>Login to your Heavenly Writing account to access your personal horoscope</h1>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email" required
                                           onChange={e => data.email = e.target.value}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required
                                           onChange={e => data.password = e.target.value}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Login</button>
                            </form>
                            <p>
                                Don't have an account? Sign up <a href="SignUp">here</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
        );
    }
};

export default Home;
