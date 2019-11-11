import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Router exact path ="/" component={MovieList}/>
      <Router path ="/movies/:id" component={Movie}/>
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
