import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Redirect } from 'react-router-dom';
import NavBar from '../../components/Header/NavBar';

const SignUp = () => {


    const data = {
        natalSign: '',
        name: {first: '', last: ''},
        DOB: {month: '', day: '', year: ''},
        location: {
            city: '',
            state: '',
            zip: ''
        },
        time: {hour: '00', minute: '00'},
        email: '',
        number: '',
        password: '',
        password2: '',
        admin: false
    };

    const handleSubmit = (e) => {
        axios.post('/api/users/SignUp', data)
            .then(res => {
                console.log("Registration was successful!");
                console.log(res);
                sessionStorage.setItem("register", 1)
                console.log("Register status: " + sessionStorage.getItem("register"));
                window.location.reload();
        })
            .catch(err => {
                //All possible errors messages are below
                if (err.response.data.name){console.log(err.response.data.name)};
                if (err.response.data.DOB){console.log(err.response.data.DOB)};
                if (err.response.data.location){console.log(err.response.data.location)};
                if (err.response.data.time){console.log(err.response.data.time)};
                if (err.response.data.email){console.log(err.response.data.email)};
                if (err.response.data.password){console.log(err.response.data.password)};
                if (err.response.data.password2){console.log(err.response.data.password2)};       //confirm password field
                console.log(err);
            })
        e.preventDefault();     //This is to prevent reloading in the event that an error occurs
    };

    if (sessionStorage.getItem("loggedStatus") == 1){
        return <Redirect to='/client' />
    } else if (sessionStorage.getItem("loggedStatus") == 2){
        return <Redirect to='/admin' />
    } else if (sessionStorage.getItem("register") == 1){
        return <Redirect to='/Home' />
    }
    return (
        <div>
        <div>
            <NavBar/>
        </div>
        <div className="signUp">
            <div className="signUpContainer">
                <h1>Heavenly Writing Subscription Form</h1>
                <p>To receive personalized horoscopes from Heavenly Writing please fill in the information below.</p>
                <form onSubmit={handleSubmit}>
                    <div className="row1">
                        <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name="firstName" placeholder="First name" required
                           onChange={e => data.name.first = e.target.value + ' '}
                        />
                        </div>
                    <div className="col">
                        <input type="text" className="form-control" name="lastName" placeholder="Last name" required
                           onChange={e => data.name.last = e.target.value}
                    />
                    </div>
                    </div>
                    </div>
                    <div className="row2">
                    <div className="form-row">
                    <div className="col">
                        <label htmlFor="dateOfBirth-input">Date of Birth</label>
                        <input className="form-control" type="date" name="DOB" id="dateOfBirth-input" required
                           onChange={e => {
                               if (e.target.value) {
                                   const date = e.target.value.split('-');
                                   data.DOB.year = date[0];
                                   data.DOB.month = date[1];
                                   data.DOB.day = date[2];
                               }
                           }}
                    />
                    </div>
                    <div className="col">
                        <label htmlFor="timeOfBirth-label">Time of Birth</label>
                        <input className="form-control" type="time" name="time" id="timeOfBirth-input"
                           onChange={e => {
                               if (e.target.value) {
                                   const time = e.target.value.split(':');
                                   data.time.hour = time[0];
                                   data.time.minute = time[1];
                               }
                           }}
                        />
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"
                               onChange={e => {
                            if(e.target.checked){
                                data.time.hour = '12';
                                data.time.minute = '0';
                            }
                        }}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                                I don't know my time of birth
                            </label>
                    </div>
                </div>
                </div>
                    <div className="row3">
                    <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" name="city" id="validationCustom03" placeholder="City" required
                               onChange={e => {
                                   data.location.city = e.target.value;
                               }}
                        />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                    </div>
                        <div className="col">
                            <input type="text" className="form-control" name="state" id="validationCustom04" placeholder="State" required
                                   onChange={e => {
                                       data.location.state = e.target.value;
                                   }}
                            />
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="zip" id="validationCustom05" placeholder="Zip" required
                                   onChange={e => {
                                data.location.zip = e.target.value;
                            }}
                            />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                        </div>
                     </div>
                    </div>
                <div className="row4">
            <div className="form-row">
                <div className="col">

                    <input type="text" className="form-control" name="email" placeholder="Email Address" required

                           onChange={e => data.email = e.target.value}
                    />
                </div>
                <div className="col">

                    <input type="text" className="form-control" name="number" placeholder="Phone Number" required

                           onChange={e => data.number = e.target.value}
                    />
                </div>
            </div>
                    </div>
                <div className="row5">
            <div className="form-row">
                <div className="col">
                    <input type="password" className="form-control" name="password" placeholder="Password" required
                           onChange={e => data.password = e.target.value}
                    />

                </div>
                <div className="col">
                    <input type="password" className="form-control" placeholder="Confirm Password" required
                            onChange={e => data.password2 = e.target.value}
                    />

                </div>
            </div>
                    </div>
                <div className="submitButton">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <p></p>
                    <p>
                        Already have an account? Login <a href="Home">here</a>.
                    </p>
                </div>
        </form>
            </div>
        </div>
        </div>
    );
};

export default SignUp;
