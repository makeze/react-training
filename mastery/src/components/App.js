import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {

    state = {
        videos: []
    };

    onSubmit = async (searchTerm) => {

        const response = await youtube.get('search', {
            'params': {
                q: searchTerm
            }
        });
        this.setState({
            videos: response.data.items
        });
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default App;