import React from 'react';
import axios from 'axios';
import './Home.css';

const  Home = () => {

    //intialization of form variables
    const data = {
        email: '',
        password: ''
    };

    const onSubmit = (e) =>{
        axios.post('/api/users/login', data)
            .then( res => {
                console.log("Login was successful!");
                console.log(res);
            })
            .catch ( err => {
                if (err.response.data.email) {console.log(err.response.data.email)};
                if (err.response.data.password) {console.log(err.response.data.password)};
                if (err.response.data.emailnotfound) {console.log(err.response.data.emailnotfound)};
                if (err.response.data.passwordincorrect) {console.log(err.response.data.passwordincorrect)};
                console.log(err);
            })
        e.preventDefault();
    };


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
                        <form>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Email" required
                                    onChange = { e => data.email = e.target.value }
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" required
                                    onChange = { e => data.password = e.target.value }
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick = {onSubmit}>Login</button>
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
