import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';

const SignUp = () => {

    const data = {
        natalSign: '',
        name: {first: '', last: ''},
        DOB: {month: '', day: '', year: ''},
        location: '',
        time: {hour: '', minute: ''},
        email: '',
        number: '',
        password: ''
    };

    // This doesn't work properly but maybe it should?
    // const handleSubmit = () => {
    //     axios.post("http://localhost:5000/SignUp", data)
    //         .then(res => {
    //             console.log('post request sent');
    //             toast.success("Successful");
    //     })
    //         .catch(err => {
    //             toast.error('Error');
    //         })
    // };

    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name"
                           onChange={e => data.name.first = e.target.value + ' '}
                    />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"
                           onChange={e => data.name.last = e.target.value}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="dateOfBirth-input">Date of Birth</label>
                    <input className="form-control" type="date" id="dateOfBirth-input"
                           onChange={e => {
                               const date = e.target.value.split('-');
                               data.DOB.year = date[0];
                               data.DOB.month = date[1];
                               data.DOB.day = date[2];
                           }}
                    />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Location of Birth"
                           onChange={e => data.location = e.target.value}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="timeOfBirth-label">Time of Birth</label>
                    <input className="form-control" type="time" id="timeOfBirth-input"
                           onChange={e => {
                               const time = e.target.value.split(':');
                               data.time.hour = time[0];
                               data.time.minute = time[1];
                           }}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" type = "email" placeholder="Email Address"
                           onChange={e => data.email = e.target.value}
                    />
                </div>
                <div className="col">
                    <input type="text" className="form-control" type = "tel" placeholder="Phone Number"
                           onChange={e => data.number = e.target.value}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Password"
                           onChange={e => data.password = e.target.value}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Confirm Password"/>
                </div>
            </div>
            <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Primary</button>
        </form>

    );

};

export default SignUp;