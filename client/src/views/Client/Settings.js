import React from 'react';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';

const Settings= (props) => {

    const handleEmail = (e) => {

    }
    const handlePassword = (e) => {

    }
    const handleNotifications = (e) => {

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
                                    <FormControl type="email" placeholder="Enter new email"/>
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