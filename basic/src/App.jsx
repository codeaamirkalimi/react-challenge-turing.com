import {Component} from "react";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Aamir"
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        <h1>My Name is {this.state.name}</h1>
                        <button onClick={() => {
                            this.setState({name: "Kalimi"})
                        }
                        }>Change Name
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
