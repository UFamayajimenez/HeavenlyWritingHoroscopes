import React from 'react';

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
        </form>

    );

};

export default SignUp;