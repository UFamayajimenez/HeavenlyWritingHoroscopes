import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom'
import './DailyReport.css'
import axios from "axios";

const DailyReport= (props) => {
    const [natalSign, updateNatalSign] = useState('');
    const [moonSign, updateMoonSign] = useState('');
    const [moonPhase, updateMoonPhase] = useState('');
    const [firstName, updateFirstName] = useState('');
    const [horoscope, updateHoroscope] = useState('');

    const getReport = () => {
        axios.get("/api/users/userReport", {
            params: {
                email: sessionStorage.email
            }
        })
            .then((res) => {
                console.log('axios post success');
                updateFirstName(res.data.firstName);
                updateHoroscope(res.data.horoscope);
                updateMoonPhase(res.data.moonPhase);
                updateMoonSign(res.data.moonSign);
                updateNatalSign(res.data.natalSign);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect (getReport);

    if (sessionStorage.getItem("loggedStatus") == 0){
        return <Redirect to='/Home' />
    }
    else {
        return(
            <div className="allOfIt">
                <h1>Today's Report</h1>
                <div className="bigContainer">
                    <div className="leftSideContainer">
                        <h3>Your Natal Sign is
                            <span className="keyWord">
                                {" " + natalSign}
                            </span>
                         </h3>
                        <h3>Today's Transit Moon Sign is
                            <span className="keyWord">
                                {" " + moonSign}
                            </span>
                        </h3>
                        <h3>
                            Today's Moon Phase is
                            <span className="keyWord">
                                {" " + moonPhase}
                            </span>
                        </h3>
                    </div>
                    <div className="rightSideContainer">
                        <h1>
                            <span className="keyWord">
                                {firstName + ","}
                            </span>
                        </h1>
                        <div className="overflow-auto">
                            <p>{horoscope}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DailyReport;