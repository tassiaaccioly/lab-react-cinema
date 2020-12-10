import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
