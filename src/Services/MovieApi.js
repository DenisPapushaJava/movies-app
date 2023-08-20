import StorageService from '../helper/StorageService';

const myLocalStorage = new StorageService();
export default class MovieApi {

  constructor() {
    this.apiBase = 'https://api.themoviedb.org/3';
    this.apiKey = '269a8d1b1a32cd3c0414c8b32a98ede8';
  }

  guestNewSession = async () => {
    const query = `${this.apiBase}/authentication/guest_session/new?api_key=${this.apiKey}`;

    const res = await fetch(query)
      .then((data) => data.json())
      .catch((err) => {
        throw new Error(`Received: ${err}`);
      });
    return res.guest_session_id;
  };

  createNewSession = async () => {
    if(myLocalStorage.getLocalStorage("sessionId")){
      return
    }
    const  guestSession = await this.guestNewSession();
    myLocalStorage.addLocalStorage("sessionId", guestSession);
    return myLocalStorage.getLocalStorage("sessionId");
  };


}
