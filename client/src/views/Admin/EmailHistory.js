import React from 'react';

const EmailHistory = (props) => {
    return(
        <div className="email-container">
            <h2 style={{padding: "20px"}}>To {props.recipient} on {props.date}</h2>
            <hr/>
            <p>{props.message}</p>
        </div>
    )
}

export default EmailHistory;