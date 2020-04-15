import { Redirect } from 'react-router-dom';
import React, {useState} from 'react';
import EmailHistory from './EmailHistory';
import axios from 'axios';

const Database= (props) => {

    const [emails, setEmails] = useState([]);

    const ListEmails = () => {
        axios.get('/api/users/emaillist')
            .then(res => {
                console.log(res.data);
                setEmails(res.data);
                return res.data;
            });

        if(emails == null) {
            return(
                <EmailHistory recipient={"no one!"}  
                                moonphase={"Unknown"} 
                                moonsign={"Unknown"}
                                message={"No emails have been sent yet"}/>
            );
        }
        const allEmails = emails.map(email => {
            
            if(email.audience.natalSign == null) { 
                return(
                    <div></div>
                );
            }
 
            return(
                <EmailHistory recipient={email.audience.natalSign} 
                                moonphase={email.audience.moonPhase} 
                                moonsign={email.audience.moonSign} 
                                message={email.content}                 
                />
            );

        });

        return allEmails;
    }

    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }
    
    return(
        <div className ="adminBackground">
            <div>
                <h1 style={{textAlign: "center", color: "white", padding:"40px"}}> Past Email Database</h1>
            </div>
            <div className="email-section">{ListEmails()}</div>
            
        </div>
    );
}

export default Database;