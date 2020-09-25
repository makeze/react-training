import React from 'react';
import './SeasonDisplay.css'

const seasonText = {
    summer: {
        text: "Lets swim!",
        icon: "sun"
    },
    winter: {
        text: "So cold outside.",
        icon: "snowflake"
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = seasonText[season];
    return (
        <div className={"season-display " + season}>
            <i className={"icon-left massive icon " + icon}/>
            <h1>{text}</h1>
            <i className={"icon-right massive icon " + icon}/>
        </div>
    );
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
 };

export default SeasonDisplay;