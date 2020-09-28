import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async searchTerm => {
        const response = await unsplash.get('/search/photos/', {
            params: {query: searchTerm},
        });
        this.setState({
            images: response.data.results
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
};
export default App;