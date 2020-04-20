import React from 'react';

const EmailHistory = (props) => {
    return(
        <div className="email-container">
            <h2 style={{padding: "20px"}}>To {props.recipient} subscribers: </h2>
            <h3>Moon Phase: {props.moonphase}, Moon Sign: {props.moonsign}</h3>
            <hr/>
            <p>{props.message}</p>
        </div>
    )
}

export default EmailHistory;