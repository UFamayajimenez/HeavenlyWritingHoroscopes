import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';
import axios from "axios";



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


    const[email, setEmail] = useState();


    const handleEmail = (e) => {


        let oldEmail = sessionStorage.email;
        let newEmail = usrData.email;


        console.log("old email: " + oldEmail);
        console.log("new email: " + newEmail);

        usrData.email = oldEmail;

        axios.post('/api/users/changeEmail', usrData)
            .then(res => {
                console.log("req was successful!");
                console.log(res);
            })
            .catch(err => {
                //All possible errors messages are below
                console.log(err);
            });
        e.preventDefault();

       //connect to db and update object with new email

    };
    const handlePassword = (e) => {

        //connect to db and update object with new password after encrypting new password

    }
    const handleNotifications = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };


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
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <FormControl type="email" placeholder="Enter new email"
                                                 onChange={e => {
                                                     if (e.target.value) {
                                                         const myEmail = e.target.value;
                                                         usrData.email = myEmail;
                                                     }
                                                 }}
                                    />
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