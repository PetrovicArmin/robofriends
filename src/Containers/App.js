import React, { Component } from 'react';
import CardList from '../Components/cardList.js';
import SearchBox from '../Components/searchBox';
import ErrorBoundry from '../Components/errorBoundry';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	robots: [],
        	searchText: ''
        };
    }

    componentDidMount() {
    	fetch("https://jsonplaceholder.typicode.com/users/")
    		.then(result => result.json())
        	.then(users => this.setState({ robots: users }));
    }

    onChangeMethod = (event) => {    
    	this.setState({ 
    		searchText: event.target.value
    	});
    } 

    render() {
    	const filteredRobots = this.state.robots.filter(robot => {
    		return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    	});

    	if (this.state.robots.length === 0) {
    		return <h1>Loading...</h1>
    	}

        return (
            <div className="tc">
            	<div>
	            	<h1 className="f1">Robofriends</h1>
	            	<SearchBox onChangeMethod={this.onChangeMethod}/>
            	</div>
            	<Scroll>
                    <ErrorBoundry>
            		     <CardList array={filteredRobots}/>
                    </ErrorBoundry>
            	</Scroll>
            </div>
        );
    }
}

export default App;
