<<<<<<< HEAD
import React from 'react';
import { Redirect } from 'react-router-dom'
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';

const Settings= (props) => {

    const handleEmail = (e) => {

    }
    const handlePassword = (e) => {

=======
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


    let foundUsrData = {
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


    let passwords = {

        old: '',
        new1: '',
        new2: '',
        email: ''
    };

    const handleEmail = (e) => {



        let emails ={

            old: sessionStorage.email,
            new: usrData.email
        };

        usrData.email = emails.old;


        //grab the user's data from the db and set it to foundUsrData and update the object's email with newEmail


        if(emails.old !== emails.new) {

            axios.post('/api/users/getDataForEmail', usrData)
                .then(res => {
                    console.log("req1 was successful!");

                    foundUsrData.natalSign = res.data.user.natalSign;
                    foundUsrData.name.first = res.data.user.name.first;
                    foundUsrData.name.last = res.data.user.name.last;
                    foundUsrData.DOB.month = res.data.user.DOB.month;
                    foundUsrData.DOB.day = res.data.user.DOB.day;
                    foundUsrData.DOB.year = res.data.user.DOB.year;
                    foundUsrData.location.city = res.data.user.location.city;
                    foundUsrData.location.state = res.data.user.location.state;
                    foundUsrData.location.zip = res.data.user.location.zip;
                    foundUsrData.time.hour = res.data.user.time.hour;
                    foundUsrData.time.minute = res.data.user.time.minute;
                    foundUsrData.email = emails.new;
                    foundUsrData.number = res.data.user.number;
                    foundUsrData.password = res.data.user.password;
                    foundUsrData.password2 = res.data.user.password2;
                    foundUsrData.admin = false;

                })
                .catch(err => {
                    //All possible errors messages are below
                    console.log(err);
                });


            console.log(foundUsrData);


            e.preventDefault();

            //now that we have the user's data + the updated email we now have to log that information back to the db

            console.log(emails);


            axios.put('/api/users/changeEmail', emails)
                .then(res => {
                    console.log("req2 was successful!");
                    passwords.email = emails.new;

                })
                .catch(err => {
                    //All possible errors messages are below
                    console.log(err);
                });
        }
        else{
            console.log("emails are the same!!")
        }

    };
    const handlePassword = (e) => {

        console.log(passwords);

        if(passwords.new1 == passwords.new2){

            passwords.email = sessionStorage.email;

            axios.put('/api/users/changePassword', passwords)
                .then(res => {
                    console.log("req3 was successful!");

                })
                .catch(err => {
                    //All possible errors messages are below
                    console.log(err);
                });
        }else{
            //new passwords don't match
        }



        //connect to db and update object with new password after encrypting new password

>>>>>>> newEph
    }
    const handleNotifications = (e) => {

    }
<<<<<<< HEAD
=======
    const handleSubmit = (e) => {
        e.preventDefault();
    };
>>>>>>> newEph


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
<<<<<<< HEAD
                        <Form>
                            <Row>
                                <Col>
                                    <FormControl type="email" placeholder="Enter new email"/>
=======
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
>>>>>>> newEph
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
<<<<<<< HEAD
                        <Form>
                            <Row>
                                <Col>
                                    <FormControl type="password" placeholder="Old Password"/>
                                    <FormControl type="password" placeholder="New Password"/>
                                    <FormControl type="password" placeholder="Confirm New Password"/>
=======
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <FormControl type="password" placeholder="Old Password"
                                                 onChange={e => {
                                                     if (e.target.value) {
                                                         const oldPassword = e.target.value;
                                                         passwords.old = oldPassword;
                                                     }
                                                 }}/>
                                    <FormControl type="password" placeholder="New Password" onChange={e => {
                                        if (e.target.value) {
                                            const newPass1 = e.target.value;
                                            passwords.new1 = newPass1;
                                        }
                                    }}/>
                                    <FormControl type="password" placeholder="Confirm New Password" onChange={e => {
                                        if (e.target.value) {
                                            const newPass2 = e.target.value;
                                            passwords.new2 = newPass2;
                                        }
                                    }}/>
>>>>>>> newEph
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
<<<<<<< HEAD
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
=======
                                label="I would like to unsubscribe from all emails"
                                className="checkboxes"
                                />
                            <Button
                                style={{margin: "20px"}}
>>>>>>> newEph
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