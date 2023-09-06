import { Component } from 'react';

export default class ServiceApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: new URL('https://api.themoviedb.org'),
      mainURL: 'https://api.themoviedb.org/3',
      apiKey: '269a8d1b1a32cd3c0414c8b32a98ede8',
    };

    this.baseURL = this.state.mainURL;
    this.apiKey = this.state.apiKey;
  }

  async fetchData(path, queryParams = {}) {
    const url = this.createURL(path, queryParams);

    try {
      const result = await fetch(url);
      if (!result.ok) {
        throw new Error(`Fetch failed for ${url}: ${result.statusText}`);
      }
      return await result.json();
    } catch (e) {
      throw new Error(`Fetch error: ${e.message}`);
    }
  }

  createURL(path, queryParams = {}) {
    const url = new URL(path, this.baseURL);
    url.searchParams.set('api_key', this.apiKey);
    for (const [key, value] of Object.entries(queryParams)) {
      url.searchParams.set(key, value);
    }
    return url;
  }

  async getAllMovies(movieName) {
    return this.fetchData('3/search/movie', { query: movieName });
  }

  async getPageMovies(movieName, page) {
    return this.fetchData('3/search/movie', { query: movieName, page });
  }

  async getGenres() {
    return this.fetchData('3/genre/movie/list');
  }
}
