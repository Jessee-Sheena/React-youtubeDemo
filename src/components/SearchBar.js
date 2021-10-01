import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
    }
    onInputChange = e => {
        this.setState({ term: e.target.value });
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search for a Video</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;