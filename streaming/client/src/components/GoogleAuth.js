import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: false
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '342022662066-4ceigiqm6dhtlj9rjpu48ckvj10kdi9o.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>Problem checking authentication, please try again later</div>

        } else if(this.state.isSignedIn) {
            return <div>I am so signed in!</div>
        } else {
            return <div>Nein auth!</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;