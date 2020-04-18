import { Redirect } from 'react-router-dom';
import React, {useState} from 'react';

const Settings= (props) => {

    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }
    return(
        <div>

        </div>
    );
}

export default Settings;