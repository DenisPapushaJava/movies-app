import { Component } from 'react';
import { Spin } from 'antd';

import './spin-load.css';

export default class SpinLoad extends Component {
  render() {
    return <Spin className="spin" size="large" />;
  }
}
