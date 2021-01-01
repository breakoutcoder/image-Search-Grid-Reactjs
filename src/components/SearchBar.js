import React from 'react';

class SearchBar extends React.Component {

    state = {search: ''};

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input
                            type="text" id="search"
                            value={this.state.search}
                            onChange={e => this.setState({search: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;