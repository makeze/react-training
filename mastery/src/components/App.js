import React from 'react';
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSubmit = (searchTerm) => {
        console.log(searchTerm);
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