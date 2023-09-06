import { format } from 'date-fns';
import { Component } from 'react';

import Genres from '../genres/genres';
import Stars from '../rate-stars/rate-stars';

import './item-list.css';

export default class ItemList extends Component {
  render() {
    const { id, title, dateRelease, description, poster, dataGenres, rating, countStars, sendRateStars } = this.props;

    const posterIMG = (poster) => {
      const defaultImage =
        'https://thumbs.dreamstime.com/z/%D0%B0%D1%84%D0%B8%D1%88%D0%B0-%D0%BA%D0%B8%D0%BD%D0%BE-%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B0%D0%B5%D1%82-%D0%B7%D0%B0%D0%BD%D0%B0%D0%B2%D0%B5%D1%81-%D1%84%D0%B8-%D1%8C%D0%BC%D0%B0-%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%8B-85846351.jpg?w=992';
      const posterImage = `https://image.tmdb.org/t/p/w500${poster}`;
      return poster === null ? defaultImage : posterImage;
    };

    const formatText = (description) => {
      let string = description;
      if (description.length > 204) {
        string = string.slice(0, string.indexOf(' ', 150));
        string += ' ...';
      }
      return string;
    };

    const formatData = (dateRelease) => {
      if (!dateRelease) return null;
      return format(new Date(dateRelease), 'MMMM d, yyyy');
    };

    const getColor = (rating) => {
      let colorRating = 'rates ';
      if (rating >= 7) return colorRating + 'high';
      if (rating >= 5 && rating < 7) return colorRating + 'medium';
      if (rating >= 3 && rating < 5) return colorRating + 'low';
      if (rating >= 0 && rating < 3) return colorRating + 'none';
    };

    const getStars = (countStars) => {
      if (countStars === undefined) return 0;
      else return countStars;
    };
    return (
      <li className="item-list">
        <div>
          <img className="picture" src={posterIMG(poster)}></img>
        </div>
        <div className="info">
          <div className="box-title">
            <h5 className="title">{title}</h5>
            <p className={getColor(rating)}>{rating.toFixed(1)}</p>
          </div>
          <p className="data">{formatData(dateRelease)}</p>
          <div className="genre-box">
            <Genres dataGenres={dataGenres} />
          </div>
          <p className="description">{formatText(description)}</p>
          <Stars sendRateStars={sendRateStars} stars={getStars(countStars)} id={id} />
        </div>
      </li>
    );
  }
}
