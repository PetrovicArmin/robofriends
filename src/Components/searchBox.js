import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <input 
            	className="pa3 ba b--green bg-lightest-blue"
            	type="search" 
            	placeholder="Search your robots"
            	onChange={this.props.onChangeMethod}
            />
        );
    }
}

export default SearchBox;
