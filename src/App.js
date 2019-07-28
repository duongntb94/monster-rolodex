import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  state = {
    monsters: [],
    searchText: '',
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const monsters = await data.json();
    this.setState({
      monsters
    })
  }

  render() {
    const { monsters, searchText } = this.state;
    return (<div className='App'>
      <input type='search' placeholder='Search name' onChange={(e) => {
        console.log(e.target.value)
        this.setState({ searchText: e.target.value });
      }}/>
      <CardList monsters={!!searchText ? monsters.filter(item => item.name.indexOf(searchText) > 0) : monsters} />
    </div>)
  }
}

export default App;
