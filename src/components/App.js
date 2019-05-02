import React from 'react';
import { Route, Switch } from "react-router-dom";
import BooksContainer from './Books/BooksContainer'
import BookContainer from './Books/BookContainer';
import Header from "./Layout/Header";
import '../App.css';

const App = () => (
  <main className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={BooksContainer} />  
      <Route exact path="/book/:id" component={BookContainer} />   
    </Switch>  
  </main>
)

export default App;
