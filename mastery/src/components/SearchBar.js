import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    onChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    };

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            value={this.state.searchTerm}
                            onChange={this.onChange}
                            type="text"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;