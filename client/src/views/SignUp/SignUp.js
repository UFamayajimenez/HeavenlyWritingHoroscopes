import React from 'react';
import './SignUp.css';
const SignUp = () => {



    return (
        <div className="bg">
            <h1>Heavenly Writing Subscription Form</h1>
            <form>
                <div className="row1">
                    <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                    </div>
                </div>
                <div className="row2">
                <div className="form-row">
                <div className="col">
                    <label htmlFor="dateOfBirth-input">Date of Birth</label>
                    <input className="form-control" type="date" id="dateOfBirth-input"/>
                </div>
                <div className="col">
                    <label htmlFor="timeOfBirth-label">Time of Birth</label>
                    <input className="form-control" type="time" id="timeOfBirth-input"/>
                </div>
            </div>
                </div>
                <div className="row3">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Location of Birth"/>
                </div>
            </div>
                </div>
                <div className="row4">
            <div className="form-row">
                <div className="col">
                    <input className="form-control" type = "email" placeholder="Email Address"/>
                </div>
                <div className="col">
                    <input className="form-control" type = "tel" placeholder="Phone Number"/>
                </div>
            </div>
                    </div>
                <div className="row5">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Password"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Confirm Password"/>
                </div>
            </div>
                    </div>
                <div className="submitButton">
            <button type="button" className="btn btn-outline-primary">Submit</button>
                </div>
        </form>
        </div>

    );

};

export default SignUp;