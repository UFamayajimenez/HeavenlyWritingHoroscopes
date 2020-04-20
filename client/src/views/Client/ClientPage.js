import React, {useState} from 'react';
import ClientNavBar from './ClientNavBar';
import { Redirect, Route, Switch} from 'react-router-dom';
import DailyReport from './DailyReport';
import Settings from './Settings';
import './ClientPage.css';
import axios from 'axios';

const ClientPage = (props) => {
    //
    // const getReport = () => {
    //     let report = {};
    //     axios.get("/api/users/userReport", {
    //         params: {
    //             email: sessionStorage.email
    //         }
    //     })
    //         .then((res) => {
    //             report = res.data;
    //             if (res.error === 403) report.horoscope = 'No horoscope yet.';
    //             console.log('axios post success');
    //             return report
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    let client = sessionStorage.getItem("name") || "Greetings";
    //console.log(client);

    if (sessionStorage.getItem("loggedStatus") == 0){
        return <Redirect to='/Home' />
    }
    const greeting = () => {
        console.log(props.location.pathname);
        if(props.location.pathname == "/client") {
            return(
                <div className="clientBackground">
                    <div className="greetingtext">
                        <h1>Hello, {client} </h1>
                    </div>
                </div>
            );
        }
    }

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
                <Route exact path="/client/todays-report">
                       <DailyReport/>
            </Route>
                <Route exact path="/client/settings" component={Settings}/>
            </Switch>
            {greeting()}
        </div>
    );


}

export default ClientPage;
