import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

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

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }

    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div>Checking auth status</div>

        } else if (this.props.isSignedIn) {
            return <button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"/>
                Sign Out
            </button>
        } else {
            return <button onClick={this.onSignIn} className="ui red google button">
                <i className="google icon"/>
                Sign In
            </button>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapStateToProps,
    {signIn, signOut})
(GoogleAuth);