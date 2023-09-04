import { Component } from 'react';

import SearchPanel from '../search-panel/search-panel';
import ItemList from '../item-list/item-list';
import MyPagination from '../pagination/my-pagination';
import Offline from '../offline/offline';
import FilmNotFound from '../film-notfound/film-notfound';
import SpinLoad from '../spin-load/spin-load';

import './movies-list.css';

export default class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      queryMovie: '',
      dataMovies: [],
      filmNotFound: false,
      page: 0,
      totalPage: null,
      isLoading: false,
    };
  }

  searchMovie = (movieName) => {
    this.setState({ isLoading: true });
    if (movieName.trim() !== '') {
      this.props
        .getAllMovies(movieName)
        .then((res) => {
          if (res.results.length !== 0) {
            this.setState({
              queryMovie: movieName,
              dataMovies: res.results,
              totalPage: res.total_pages,
              page: res.page,
              isLoading: false,
              filmNotFound: false,
            });
          } else {
            this.setState({
              isLoading: false,
              filmNotFound: true,
            });
          }
        })
        .catch((e) => {
          this.setState({ isLoading: false });
          this.props.onError(e);
        });
    }
  };

  searchPageMovie = (movieName, numPage) => {
    this.setState({ isLoading: true });
    this.props
      .getPageMovies(`${movieName}`, `${numPage}`)
      .then((res) => {
        this.setState({
          queryMovie: movieName,
          dataMovies: res.results,
          totalPage: res.total_pages,
          page: res.page,
          isLoading: false,
        });
      })
      .catch((e) => {
        this.setState({ isLoading: false });
        this.props.onError(e);
      });
  };

  render() {
    const { dataMovies, totalPage, page, queryMovie, filmNotFound, isLoading } = this.state;
    const { pageTab, sendRateStars } = this.props;
    return (
      <div className="box">
        <SearchPanel searchMovie={this.searchMovie} />
        <Offline />
        {isLoading ? <SpinLoad /> : null}
        {dataMovies.length === 0 && filmNotFound ? <FilmNotFound /> : null}
        <div>
          <ul className="movies-list">
            {dataMovies.map((movie) => {
              return (
                <ItemList
                  poster={movie.poster_path}
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  dateRelease={movie.release_date}
                  description={movie.overview}
                  dataGenres={movie.genre_ids}
                  rating={movie.vote_average}
                  countStars={movie.rating}
                  sendRateStars={sendRateStars}
                />
              );
            })}
          </ul>
        </div>
        {dataMovies.length > 0 ? (
          <MyPagination
            pageTab={pageTab}
            searchPageMovie={this.searchPageMovie}
            page={page}
            totalPage={totalPage}
            queryMovie={queryMovie}
          />
        ) : null}
      </div>
    );
  }
}
