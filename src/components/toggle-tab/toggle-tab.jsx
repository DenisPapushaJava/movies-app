import { Component } from 'react';

import './switch.css';

export default class ToggleTab extends Component {
  render() {
    const { active } = this.props;
    let activeEl1 = 'buttons__label1 ';
    let activeEl2 = 'buttons__label2 ';
    if (active === 'search') activeEl1 += 'active';
    else if (active === 'rated') activeEl2 += 'active';
    return (
      <form
        className="buttons"
        onChange={(e) => {
          this.props.changePage(e.target.value);
        }}
      >
        <label className={`${activeEl1}`}>
          <input className="input--search" type="radio" name="myRadio" value="search" defaultChecked></input>
          Search
        </label>
        <label className={`${activeEl2}`}>
          <input className="input--rated" type="radio" name="myRadio" value="rated"></input>
          Rated
        </label>
      </form>
    );
  }
}
