import React from 'react';
import axios from 'axios';
import './SignUp.css';

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

    const handleSubmit = () => {
        axios.post("http://localhost:5000/SignUp", data)
            .then(res => {
                console.log('post request sent');
                console.log(res);
        })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className="signUp">
            <h1>Heavenly Writing Subscription Form</h1>
            <form>
                <div className="row1">
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
      </div>
                <div className="row2">
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
                </div>
                <div className="row3">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Location of Birth"
                           onChange={e => data.location = e.target.value}
                    />
                </div>
            </div>
                </div>
                <div className="row4">
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
                    </div>
                <div className="row5">
            <div className="form-row">
                <div className="col">
                    <input type="password" className="form-control" placeholder="Password"
                           onChange={e => data.password = e.target.value}
                    />
      
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Confirm Password"/>
                </div>
            </div>
                    </div>
                <div className="submitButton">
            <button type="password" className="btn btn-outline-primary" onClick={handleSubmit}>Submit!</button>
                </div>
        </form>
        </div>
    );
};

export default SignUp;