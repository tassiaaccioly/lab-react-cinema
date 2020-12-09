import React, { Component } from "react";
import Home from "./components/Home";

import MovieList from "./components/MovieList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <MovieList />
      </div>
    );
  }
}

export default App;
