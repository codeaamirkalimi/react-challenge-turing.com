import React, {Component} from 'react';

import "./Card.style.css";
class CardComponent extends Component {
    render() {
        const {monster}=this.props;
        return (
            <div className="card-container" key={monster.id}>
                <img alt={monster.name} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
                <h2> {monster.name} </h2>
                <p>{monster.email}</p>
            </div>
        );
    }
}

export default CardComponent;