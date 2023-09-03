import React, { Component } from 'react';
import { Alert } from 'antd';

export default class AlertDanger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { error, errorInfo } = this.props;
    return (
      <Alert
        message={error ? error : 'Error!'}
        description={errorInfo ? `${errorInfo} Something went wrong...` : 'Error occurred! Please, refresh page...'}
        type="error"
        showIcon
        closable
      />
    );
  }
}
