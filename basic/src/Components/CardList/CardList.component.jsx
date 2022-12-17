import React, {Component} from 'react';

class CardListComponent extends Component {
    render() {
        console.log(this.props);
        const { monsters }= this.props;
        return (
            <div>
                {
                    monsters.map(monster => {
                        return <h1 key={monster.id}> {monster.name} </h1>
                    })
                }
            </div>
        );
    }
}

export default CardListComponent;