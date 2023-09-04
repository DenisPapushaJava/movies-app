import { Component } from 'react';

import MyContext from '../Context/Context';

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
          return genreNames.slice(0, 3).map((name, id) => {
            return (
              <span key={id} className="genre">
                {name}
              </span>
            );
          });
        }}
      </MyContext.Consumer>
    );
  }
}
