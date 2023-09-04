import { Component } from 'react';

import MyContext from '../context/context';

export default class Genres extends Component {
  render() {
    const { dataGenres } = this.props;
    return (
      <MyContext.Consumer>
        {(value) => {
          let genreNames = dataGenres.map((item) => {
            let getItem = value.find((el) => el.id === item);
            return getItem?.name;
          });
          let genres = genreNames.slice(0, 3).map((name, id) => {
            return (
              <span key={id} className="genre">
                {name}
              </span>
            );
          });
          return genres;
        }}
      </MyContext.Consumer>
    );
  }
}
