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
                        <form>
                            <row>
                                <col>
                                    <formcontrol type="email" placeholder="Enter new email"/>
                                </col>
                                <col>
                                    <button 
                                        variant="primary" 
                                        type="submit"
                                        onClick={handleEmail}>
                                        Confirm New Email
                                    </button>
                                </col>
                            </row>
                        </form>
                    </div>
                    <div>
                    <hr/>
                        <form>
                            <row>
                                <col>
                                    <formcontrol type="password" placeholder="Old Password"/>
                                    <formcontrol type="password" placeholder="New Password"/>
                                    <formcontrol type="password" placeholder="Confirm New Password"/>
                                </col>
                                <col>
                                    <button
                                        variant="primary"
                                        type="submit"
                                        onClick={handlePassword}>
                                        Confirm New Password
                                    </button>
                                </col>
                            </row>
                        </form>
                    </div>

                </div>
                <div className="container">
                    <div className="headers">
                        <h1>Notification Settings</h1>
                        <hr/>
                    </div>
                    <div>
                        <form>
                            <Form.check
                                type="checkbox"
                                label="I would like to receive notifications on my phone"
                                className="checkboxes"
                                />
                            <Form.check
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;