import { Component } from 'react';

export default class GuestSession extends Component {
  constructor() {
    super();
    this.state = {
      url: new URL('https://api.themoviedb.org'),
      apiKey: '269a8d1b1a32cd3c0414c8b32a98ede8',
    };
  }

  async getToken() {
    const url = new URL('3/authentication/guest_session/new', this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);

    try {
      const result = await fetch(url);
      if (!result.ok) throw new Error(`Failed to Fetch: ${url} Description: ${result.statusText}`);

      const resultJson = await result.json();
      return resultJson.guest_session_id;
    } catch (e) {
      throw e;
    }
  }

  async getSession(guestSessionId, page) {
    const url = new URL(`3/guest_session/${guestSessionId}/rated/movies`, this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    url.searchParams.set('page', page);
    url.searchParams.set('sort_by', 'created_at.asc');

    try {
      const result = await fetch(url);
      if (!result.ok) throw new Error(`Failed to Fetch: ${url} Description: ${result.statusText}`);

      return await result.json();
    } catch (e) {
      throw e;
    }
  }

  async postRateStars(token, movieId, countStars) {
    const sId = token;
    const url = new URL(`3/movie/${movieId}/rating`, this.state.url);
    url.searchParams.set('api_key', this.state.apiKey);
    url.searchParams.set('guest_session_id', sId);

    try {
      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ value: countStars }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!result.ok) throw new Error(`Failed to Fetch: ${url} Description: ${result.statusText}`);

      return result;
    } catch (e) {
      throw e;
    }
  }
}
