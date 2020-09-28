import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async searchTerm => {
        const response = await unsplash.get('/photos/', {
            params: {query: searchTerm},
        });
        this.setState({
            images: response.data
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Received: {this.state.images.length} images
            </div>
        );
    };
};
export default App;