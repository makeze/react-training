import React from 'react';

const SeasonDisplay = props => {
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    return <div>Season Display: {props.lat}, {season}</div>
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
 }

export default SeasonDisplay;