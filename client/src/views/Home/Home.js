import React from 'react';
import './Home.css';

const  Home = () => {
    return (
        <div className="home">
        <div className="sidenav">
            <div className="login-main-text">
                <h1>Login to your Heavenly Writing account to access today's horoscope</h1>
            </div>
        </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form>
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
