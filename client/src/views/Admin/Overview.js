import { Redirect } from 'react-router-dom';
import React, {useState} from 'react';

const Overview= (props) => {

    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }
    return(
        <div className="adminBackground">

        </div>
    );
}

export default Overview;