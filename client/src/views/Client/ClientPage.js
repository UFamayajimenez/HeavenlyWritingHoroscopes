import React, {useState} from 'react';
import ClientNavBar from './ClientNavBar';
import { Route, Switch} from 'react-router-dom';
import DailyReport from './DailyReport';
import Settings from './Settings';
import './ClientPage.css'

const ClientPage = (props) => {

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <div>
                {/* <ClientNavBar/> */}
            </div>
            
            <Switch>
                <Route exact path="/client/todays-report" component={DailyReport}/>
                <Route exact path="/client/settings" component={Settings}/>
            </Switch>
        </div>
    );
}

export default ClientPage;