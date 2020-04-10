import { Redirect } from 'react-router-dom';
import React, {useState} from 'react';
import EmailHistory from './EmailHistory';


const Database= (props) => {


    const ListEmails = () => {

        var email = "This is test information that is not the final implementation by any means"

        return(
            
            <EmailHistory/>
            
        )
    }

    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }
    
    return(
        <div className ="adminBackground">
            <div>
                <h1 style={{textAlign: "center", color: "white"}}> Past Email Database</h1>
            </div>
            <div>{ListEmails()}</div>
            
        </div>
    );
}

export default Database;