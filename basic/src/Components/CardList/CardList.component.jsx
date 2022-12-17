import React, {Component} from 'react';

import "./CardList.style.css";
import CardComponent from "../Card/Card.component";
class CardListComponent extends Component {
    render() {
        const { monsters }= this.props;
        return (
            <div className="card-list">
                {
                    monsters.map(monster => {
                        return <CardComponent monster={monster}/>
                    })
                }
            </div>
        );
    }
}

export default CardListComponent;