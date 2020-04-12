import React from 'react';
import { Redirect } from 'react-router-dom'
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';

const Settings= (props) => {

    let usrData = {
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

    const handleEmail = (e) => {

        let email = sessionStorage.getItem("email");

        let name = sessionStorage.getItem("name");


        console.log(usrData.email);


        console.log("yo!!!!");


        console.log(name);
        console.log(email);

    }
    const handlePassword = (e) => {

    }
    const handleNotifications = (e) => {

    }


    if (sessionStorage.getItem("loggedStatus") == 0){
        return <Redirect to='/Home' />
    }
    
    return(
        <div className="clientBackground">
            <div className="bigContainer">
                <div className="container">
                    <div className="headers">
                        <h1>Change Email or Password</h1>
                        <hr/>
                    </div>
                    <div>
                        <Form>
                            <Row>
                                <Col>
                                    <FormControl type="email" placeholder="Enter new email"
                                                 onChange={e => usrData.email = e.target.value}/>
                                </Col>
                                <Col>
                                    <Button 
                                        variant="primary" 
                                        type="submit"
                                        onClick={handleEmail}>
                                        Confirm New Email
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div>
                    <hr/>
                        <Form>
                            <Row>
                                <Col>
                                    <FormControl type="password" placeholder="Old Password"/>
                                    <FormControl type="password" placeholder="New Password"/>
                                    <FormControl type="password" placeholder="Confirm New Password"/>
                                </Col>
                                <Col>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={handlePassword}>
                                        Confirm New Password
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </div>
                <div className="container">
                    <div className="headers">
                        <h1>Notification Settings</h1>
                        <hr/>
                    </div>
                    <div>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                label="I would like to receive notifications on my phone"
                                className="checkboxes"
                                />
                            <Form.Check
                                type="checkbox"
                                label="I would like to receive notifications on my calendar"
                                className="checkboxes"
                                />
                            <Form.Check
                                type="checkbox"
                                label="I would like to unsubscribe from all notifications"
                                className="checkboxes"
                                />
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleNotifications}>
                                    Update My Preferences
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;