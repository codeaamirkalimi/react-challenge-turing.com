import { useState, useEffect } from "react";

import "./App.css";
import CardListComponent from "./Components/CardList/CardList.component";
import SearchBoxComponent from "./Components/SearchBox/SearchBox.component";

/**
 * App Component
 */
const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };
  return (
    <div className="App">
      <h1 className="title">MONSTER ROLODEX</h1>
      <SearchBoxComponent
        onSearchHandler={onSearch}
        placeholder="Search Monster"
      />
      <CardListComponent monsters={filteredMonsters} />
    </div>
  );
};

export default App;
