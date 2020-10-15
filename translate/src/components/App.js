import React from 'react';
import UserCreate from "./UserCreate";

class App extends React.Component {
    state = {language: 'english'};

    onLanguageChange = language => {
        this.setState({language: language});
    };

    render() {
        return (
            <div className="container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag ru" onClick={() => this.onLanguageChange('russian')}/>
                </div>
                <UserCreate/>
            </div>
        )
    }
}

export default App;