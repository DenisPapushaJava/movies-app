import { Input } from 'antd';
import { Component } from 'react';
import { debounce } from 'lodash';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = debounce((e) => {
    const query1 = e.target.value;
    this.setState({ query: query1 });
    this.props.searchMovie(query1);
  }, 500);

  render() {
    return (
      <Input
        className="search-panel"
        placeholder="Type to search..."
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
