import { Redirect } from 'react-router-dom';
import React from 'react';
import './CreateEmail.css';
import axios from 'axios';

const  CreateEmail = () => {

    const data = {
        audience: {
            natalSign: 'Aries',
            moonPhase: '1',
            moonSign: 'Aries',
        },
        content: ''
    };

    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }

    const handleSubmit = (e) => {
        axios.post("/api/emails/create", data)
            .then(res => {
                console.log('Email creation success!');
                console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log('Error!\n');
                console.log(err);
            });
    };

    return (
        <div className="createEmail">
            <form>
                <div className="emailTextInputContainer">
                    <div className="textInput">

                        <h2>Input the Text for the Corresponding Email Below</h2>

                        <div className="textBox">

                            <div className="form-group">
                                <textarea className="form-control" id="textForHoroscopeEmail" rows="15" required
                                          onChange={e => data.content = e.target.value}
                                />
                            </div>
                        </div>


                    </div>
                </div>
                <div className= "userCombinationContainer">
                    <h1>User Combination</h1>

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="natalSignLabel">Natal/Rising Sign</label>
                            <select className="form-control" id="natalSignSelect"
                                    onChange={e => data.audience.natalSign = e.target.value}
                            >
                                <option value="Aries">Aries</option>
                                <option value="Taurus">Taurus</option>
                                <option value="Gemini">Gemini</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Leo">Leo</option>
                                <option value="Virgo">Virgo</option>
                                <option value="Libra">Libra</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Sagittarius">Sagittarius</option>
                                <option value="Capricorn">Capricorn</option>
                                <option value="Aquarius">Aquarius</option>
                                <option value="Pisces">Pisces</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonPhaseLabel">Transitioning Moon Phase</label>
                            <select className="form-control" id="transitioningMoonPhaseSelect"
                                    onChange={e => data.audience.moonPhase = e.target.value}
                            >
                                <option value="New Moon">New Moon</option>
                                <option value="Waxing Crescent">Waxing Crescent</option>
                                <option value="First Quarter">First Quarter</option>
                                <option value="Waxing Gibbous">Waxing Gibbous</option>
                                <option value="Full Moon">Full Moon</option>
                                <option value="Waning Gibbous">Waning Gibbous</option>
                                <option value="Last Quarter">Last Quarter</option>
                                <option value="Waning Crescent">Waning Crescent</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonSignLabel">Transitioning Moon Sign</label>
                            <select className="form-control" id="transitioningMoonSignSelect"
                                    onChange={e => data.audience.moonSign = e.target.value}
                            >
                                <option value="Aries">Aries</option>
                                <option value="Taurus">Taurus</option>
                                <option value="Gemini">Gemini</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Leo">Leo</option>
                                <option value="Virgo">Virgo</option>
                                <option value="Libra">Libra</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Sagittarius">Sagittarius</option>
                                <option value="Capricorn">Capricorn</option>
                                <option value="Aquarius">Aquarius</option>
                                <option value="Pisces">Pisces</option>
                            </select>
                        </div>
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="transitioningMoonNatalHouseLabel">Transitioning Moon Natal House</label>*/}
                        {/*    <select className="form-control" id="transitioningMoonNatalHouseSelect">*/}
                        {/*        <option>1</option>*/}
                        {/*        <option>2</option>*/}
                        {/*        <option>3</option>*/}
                        {/*        <option>4</option>*/}
                        {/*        <option>5</option>*/}
                        {/*        <option>6</option>*/}
                        {/*        <option>7</option>*/}
                        {/*        <option>8</option>*/}
                        {/*        <option>9</option>*/}
                        {/*        <option>10</option>*/}
                        {/*        <option>11</option>*/}
                        {/*        <option>12</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        <div className="submitButton">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    );
};

export default CreateEmail;