import React, { Component } from 'react';

import MovieList from '../MovieList/MovieList';
import MovieApi from '../../Services/MovieApi';

import './App.css';
import StorageService from "../../helper/StorageService";

const myLocalStorage = new StorageService();
export default class App extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-class-component-methods
    this.api = new MovieApi();
  }

  render() {
    console.log(myLocalStorage.getLocalStorage("sessionId"));
    return (
      <div className="wrap">
        <MovieList />
      </div>
    );
  }
}
