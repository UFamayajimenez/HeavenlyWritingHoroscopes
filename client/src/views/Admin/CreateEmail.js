import React from 'react';
import './CreateEmail.css';

const  CreateEmail = () => {
    return (
        <div className="createEmail">
            <form>
                <div className="emailTextInputContainer">
                    <div className="textInput">

                        <h2>Input the Text for the Corresponding Email Below</h2>

                        <div className="textBox">

                            <div className="form-group">
                                <textarea className="form-control" id="textForHoroscopeEmail" rows="15"></textarea>
                            </div>
                        </div>


                    </div>
                </div>
                <div className= "userCombinationContainer">
                    <h1>User Combination</h1>

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="natalSignLabel">Natal/Rising Sign</label>
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
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonPhaseLabel">Transitioning Moon Phase</label>
                            <select className="form-control" id="transitioningMoonPhaseSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="transitioningMoonSignLabel">Transitioning Moon Sign</label>
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
                        </div>
                    </div>
                </div>
            </form>

        </div>

    );
};

export default CreateEmail;