import { Component } from 'react';

import ItemList from '../item-list/item-list';
import MyPagination from '../pagination/my-pagination';

import './rated-list.css';

export default class RatedList extends Component {
  constructor() {
    super();
    this.state = {
      dataRated: [],
      page: 0,
      totalPage: 0,
      totalResults: 0,
    };
  }

  getGuestSession = () => {
    this.props
      .getGuestSession()
      .then((res) => {
        this.setState({
          dataRated: res.results,
          page: res.page,
          totalPage: res.total_pages,
          totalResults: res.total_results,
        });
      })
      .catch((e) => this.props.onEror(e));
  };

  getPageSession = (page) => {
    this.props
      .getPageSession(page)
      .then((res) => {
        this.setState({
          dataRated: res.results,
          page: res.page,
          totalPage: res.total_pages,
          totalResults: res.total_results,
        });
      })
      .catch((e) => this.props.onEror(e));
  };

  componentDidMount() {
    this.getGuestSession();
  }

  render() {
    const { dataRated, totalResults, page, totalPage } = this.state;
    const { pageTab } = this.props;
    if (dataRated.length === 0) return null;
    else
      return (
        <div>
          <ul className="movies-list">
            {dataRated.map((movie) => {
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
                  rete={movie.rating}
                  countStars={movie.rating}
                />
              );
            })}
          </ul>
          {totalResults > 20 ? (
            <MyPagination pageTab={pageTab} getPageSession={this.getPageSession} page={page} totalPage={totalPage} />
          ) : null}
        </div>
      );
  }
}
