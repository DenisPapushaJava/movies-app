import { Component } from 'react';
import { Rate } from 'antd';

export default class Stars extends Component {
  handleClickStars = (countStars) => {
    this.props.sendRateStars(this.props.id, countStars);
  };
  render() {
    const { stars } = this.props;
    return <Rate className="rate" defaultValue={stars} count={10} onChange={this.handleClickStars} />;
  }
}
