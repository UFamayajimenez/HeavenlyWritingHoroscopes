import React, {useState} from 'react';

const SignUp = () => {



    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"/>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="dateOfBirth-input">Date of Birth</label>
                    <input className="form-control" type="date" id="dateOfBirth-input"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Location of Birth"/>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="timeOfBirth-label">Time of Birth</label>
                    <input className="form-control" type="time" id="timeOfBirth-input"/>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" type = "email" placeholder="Email Address"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" type = "tel" placeholder="Phone Number"/>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Password"/>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Confirm Password"/>
                </div>
            </div>
            <button type="button" className="btn btn-outline-primary">Primary</button>
        </form>

    );

};

export default SignUp;