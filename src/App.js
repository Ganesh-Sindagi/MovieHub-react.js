import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Components/Movies/Movies';
import SearchMovie from './Components/SearchMovie/SearchMovie.js';
import MovieDetails from './Components/MovieDetails/MovieDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route path="/searchmovie" component={SearchMovie} />
          <Route path="/moviedetails" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
