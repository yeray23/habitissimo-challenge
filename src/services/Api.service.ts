export default class ApiService {
  /**
   * Common function to get every data in form
   * @param url
   */
  static async getApiData(url: string) {
    try {
      const xhr = await fetch(url);
      return await xhr.json();
    } catch (e) {
      console.error(e);
    }
  }
};
