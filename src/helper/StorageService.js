class StorageService {
  putLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw Error(e);
    }
  };

  getLocalStorage = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      throw Error(e);
    }
  };
}
export default StorageService;
