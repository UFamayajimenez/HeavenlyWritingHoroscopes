import React, {useState} from 'react';
import ClientNavBar from './ClientNavBar';
import { Redirect, Route, Switch} from 'react-router-dom';
import DailyReport from './DailyReport';
import Settings from './Settings';
import './ClientPage.css'

const ClientPage = (props) => {

    let client = sessionStorage.getItem("name") || "Greetings";
    //console.log(client);

    if (sessionStorage.getItem("loggedStatus") == 0){
        return <Redirect to='/Home' />
    }
<<<<<<< HEAD
    else{
        return (
            <div className="clientPage">
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                <div>
                    { <ClientNavBar/> }
                </div>

                <Switch>
                    <Route exact path="/client/todays-report" component={DailyReport}/>
                    <Route exact path="/client/settings" component={Settings}/>
                </Switch>
=======

    const greeting = () => {
        console.log(props.location.pathname);
        if(props.location.pathname == "/client") {
            return(
>>>>>>> emailDatabase
                <div className="clientBackground">
                    <div className="greetingtext">
                        <h1>Hello, {client} </h1>
                    </div>
                </div>
            );
        }
    }
<<<<<<< HEAD

=======
    
    return (
        <div className="clientPage">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <div>
                { <ClientNavBar/> }
            </div>
            
            <Switch>
                <Route exact path="/client/todays-report" component={DailyReport}/>
                <Route exact path="/client/settings" component={Settings}/>
            </Switch>
            {greeting()}
        </div>
    );

    
>>>>>>> emailDatabase
}

export default ClientPage;
