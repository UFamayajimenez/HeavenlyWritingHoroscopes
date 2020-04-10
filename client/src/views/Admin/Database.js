import { Redirect } from 'react-router-dom';
import React, {useState} from 'react';
import EmailHistory from './EmailHistory';
import axios from 'axios';

const Database= (props) => {

    const [emails, setEmails] = useState([]);

    const ListEmails = () => {
        //CHANGE THIS GET REQUEST URL, THIS IS TEMPORARY INFO FOR TESTING
        axios.get('/api/users/userlist')
            .then(res => {
                console.log(res.data);
                setEmails(res.data);
                return res.data;
            });

        const allEmails = emails.map(email => {
            // CHANGE ALL OF THIS INFO TOO, PURELY FOR TESTING!!
            
            return(
                
                <EmailHistory recipient={email.name.first} date={email.DOB.month} message={email.email}/>
            )

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