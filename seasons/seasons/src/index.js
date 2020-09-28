import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import LoadingScreen from "./LoadingScreen";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: null
        }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({lat: position.coords.latitude})},
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <LoadingScreen messasge="Please accept location request" />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);