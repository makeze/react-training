import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="ui segment season-display">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    )
}

export default LoadingScreen;