import React from 'react';
import { Redirect } from 'react-router-dom'
import './DailyReport.css'

const DailyReport= (props) => {


    const fakeData = {
        natalSign: 'Virgo',
        ascendentSign: "Aries",
        moonPhase: "Full moon",
        horoscope: "Sometimes you must bring things to a close before moving forward. The next few days will be one of those times. If you’ve been procrastinating, use this time to finish up whatever you want to put behind you. In particular, tackle those things that require a bit of courage, self-advocacy, or spunky independence. Here’s the thing: overall your mood may be quieter and more contemplative, so you’ll want to focus your energies to avoid running out of steam. To get the most of the day, balance your activity with time away from the hustle of the world. If you find yourself feeling blocked or stymied—or caught up in old, self-defeating patterns—muster the courage to face your ghosts. Rather than beating yourself up for the junk food you just ate or the deadline you missed (again), try honestly assessing what lies behind the missteps and then commit to a more realistic path forward. (Doesn’t this sound more constructive than beating yourself up or wallowing in guilt?) For the more spiritually minded, the next few days are fruitful ones for retreat, yoga, prayer—anything that directs your focus inward. In general, you’ll find it easier to do your own thing right now, and you’re more likely to succeed when you put your passions and enthusiasms front and center. Choosing one thing that needs handling—something you care about—and giving it a final push will be easier than casting the net wide. If it happens to be a tedious task, try tackling it in short bursts and keeping your eye on the prize. Working somewhere free of distraction will also help.  Best activities: Solo workouts and physical activities. Chill time: taking a pause before a new cycle starts. Tying up loose ends; clearing the slate. Self-reflection on habits or behaviors that get in your way. Initiatives that let you work alone or in the background. (Avoid the masses.) Using your strength to advocate or help those who don’t have a voice or are disempowered. It’s your monthly “New Year’s Eve”: what do you want to leave in the old month and not carry forward? Contemplative activities: retreat/meditation/yoga/solitude. \n" +
            "Balsamic Moon Themes: Completing, releasing, preparing for the next cycle of growth, letting go of the past, endings/closures, contemplation, tying up loose ends. \nAries Themes: Self-definition, confidence, independence, passion, drive, healthy self-assertion, courage, putting oneself first, intuition, initiating, impulsivity, fighting for what’s important to you or the underdog, leading rather than following12th House Themes: Self-sabotage, unconscious patterns, solitude, contemplation, alone time, withdraw, supporting those in need, charitable acts, spirituality.",
        name: {first: 'Amaya', last: 'Jimenez'},
        DOB: {month: '08', day: '25', year: '2000'},
        location: {
            city: 'Orlando',
            state: 'FL',
            zip: '32832'
        },
        time: {hour: '00', minute: '00'},
        email: 'mymy8323@gmail.com',
        number: '6303373326',
        password: 'whocares',
        password2: 'whocares',
        admin: false
    };

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
                                {" " + fakeData.natalSign}
                            </span>
                         </h3>
                        <h3>Your Ascendent Sign is
                            <span className="keyWord">
                                {" " + fakeData.ascendentSign}
                            </span>
                        </h3>
                        <h3>
                            Today's Moon Phase is
                            <span className="keyWord">
                                {" " + fakeData.moonPhase}
                            </span>
                        </h3>

                    </div>
                    <div className="rightSideContainer">
                        <h1>
                            <span className="keyWord">
                                {fakeData.name.first + ","}
                            </span>
                        </h1>
                        <div className="overflow-auto">
                            <p>{fakeData.horoscope}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DailyReport;