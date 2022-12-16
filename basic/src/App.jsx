import {Component} from "react";

import "./App.css";

/**
 * App Component
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  /**
   * Fetching data from API
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          this.setState(() => {
            return {monsters: users};
          });
        });
  }

  /**
   * Calling this function when onChange event happens on the form
   * @param event
   */
  onSearch = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField: searchString,
      };
    });
  };

  render() {
    const {monsters, searchField} = this.state;
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
        <div className="App">
          <div>
            <input
                type="search"
                placeholder="search monsters"
                className="search-box"
                onChange={this.onSearch}
            />
          </div>
          {filteredMonsters.map((monster) => {
            return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
            );
          })}
        </div>
    );
  }
}

export default App;
