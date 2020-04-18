import { Redirect } from 'react-router-dom';
import React from 'react';
import './CreateEmail.css';
<<<<<<< HEAD
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

=======

const  CreateEmail = () => {

>>>>>>> newEph
    if (sessionStorage.getItem("loggedStatus") != 2){
        return <Redirect to='/Home' />
    }

<<<<<<< HEAD
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

=======
>>>>>>> newEph
    return (
        <div className="createEmail">
            <form>
                <div className="emailTextInputContainer">
                    <div className="textInput">

                        <h2>Input the Text for the Corresponding Email Below</h2>

                        <div className="textBox">

                            <div className="form-group">
<<<<<<< HEAD
                                <textarea className="form-control" id="textForHoroscopeEmail" rows="15" required
                                          onChange={e => data.content = e.target.value}
                                />
=======
                                <textarea className="form-control" id="textForHoroscopeEmail" rows="15"></textarea>
>>>>>>> newEph
                            </div>
                        </div>


                    </div>
                </div>
                <div className= "userCombinationContainer">
                    <h1>User Combination</h1>

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="natalSignLabel">Natal/Rising Sign</label>
<<<<<<< HEAD
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
=======
                            <select className="form-control" id="natalSignSelect">
                                <option>Aries</option>
                                <option>Taurus</option>
                                <option>Gemini</option>
                                <option>Cancer</option>
                                <option>Leo</option>
                                <option>Virgo</option>
                                <option>Libra</option>
                                <option>Scorpio</option>
                                <option>Sagittarius</option>
                                <option>Capricorn</option>
                                <option>Aquarius</option>
                                <option>Pisces</option>
>>>>>>> newEph
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonPhaseLabel">Transitioning Moon Phase</label>
<<<<<<< HEAD
                            <select className="form-control" id="transitioningMoonPhaseSelect"
                                    onChange={e => data.audience.moonPhase = e.target.value}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
=======
                            <select className="form-control" id="transitioningMoonPhaseSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
>>>>>>> newEph
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonSignLabel">Transitioning Moon Sign</label>
<<<<<<< HEAD
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
=======
                            <select className="form-control" id="transitioningMoonSignSelect">
                                <option>Aries</option>
                                <option>Taurus</option>
                                <option>Gemini</option>
                                <option>Cancer</option>
                                <option>Leo</option>
                                <option>Virgo</option>
                                <option>Libra</option>
                                <option>Scorpio</option>
                                <option>Sagittarius</option>
                                <option>Capricorn</option>
                                <option>Aquarius</option>
                                <option>Pisces</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonNatalHouseLabel">Transitioning Moon Natal House</label>
                            <select className="form-control" id="transitioningMoonNatalHouseSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div className="submitButton">
                            <button type="submit" className="btn btn-primary" >Submit</button>
>>>>>>> newEph
                        </div>
                    </div>
                </div>
            </form>

        </div>

    );
};

export default CreateEmail;