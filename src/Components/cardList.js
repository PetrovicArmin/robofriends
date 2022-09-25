import React, { Component, Fragment } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        return (
            <Fragment>
            {
            	this.props.array.map(u => {
					const { id, name, username, email } = u;        		
            		return <Card 
            			key={id}
            			id={id} 
            			name={name} 
            			username={username} 
            			email={email}
            		/>;
            	})
            }
            </Fragment>
        );
    }
}

export default CardList;
