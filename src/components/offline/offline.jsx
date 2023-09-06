import { Alert, Space } from 'antd';
import { Component } from 'react';

export default class Offline extends Component {
  render() {
    const hasOnline = window.navigator.onLine;
    return !hasOnline ? (
      <Space
        direction="vertical"
        style={{
          width: '100%',
          padding: '20px',
        }}
      >
        <Alert
          message="Internet disconnect"
          description="Check internet"
          type="error"
          closable
          showIcon
        />
      </Space>
    ) : null;
  }
}
