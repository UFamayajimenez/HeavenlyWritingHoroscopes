import React from 'react';
import { Redirect } from 'react-router-dom'

const DailyReport= (props) => {

    if (sessionStorage.getItem("loggedStatus") == 0){
        return <Redirect to='/Home' />
    }
    else {
        return(
            <div className="clientBackground">
    
            </div>
        );
    }

}

export default DailyReport;