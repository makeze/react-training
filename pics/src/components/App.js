import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit = (searchTerm) => {
        console.log(this.constructor.name, searchTerm);
        axios.get('https://api.unsplash.com/photos/', {
            params: {query: searchTerm},
            headers: {
                Authorization: 'Client-ID kW3cEPCLiahyXDGLjZLPVVFpn5S78GpoWx48-a0fJjo'
            }
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    };
};
export default App;