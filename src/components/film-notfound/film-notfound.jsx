import { Alert, Space } from 'antd';
import { Component } from 'react';

export default class FilmNotfound extends Component {
  render() {
    return (
      <Space
        direction="vertical"
        style={{
          width: '100%',
          padding: '20px',
        }}
      >
        <Alert message="Film not found" description="try changing the title" type="error" closable showIcon />
      </Space>
    );
  }
}
