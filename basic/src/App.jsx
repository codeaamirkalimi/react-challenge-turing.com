import {Component} from "react";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [
                {
                    id: 1,
                    name: "Aamir"
                },
                {
                    id: 2,
                    name: "Imran"
                },
                {
                    id: 3,
                    name: "Sabina"
                },
                {
                    id: 4,
                    name: "Raja"
                },
            ]
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster) => {
                        return <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default App;
