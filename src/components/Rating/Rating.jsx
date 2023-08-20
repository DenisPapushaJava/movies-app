import React, { Component } from 'react';
import { Rate } from 'antd';

export default class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Rate allowHalf value={2.5} count={10} allowClear={false} />;
  }
}
