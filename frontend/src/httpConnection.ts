import axios, { AxiosResponse } from 'axios';

export class http {
  static apiUrl = 'http://192.168.0.164:1337';
  static async getData(question: string): Promise<any[]> {
    try {
      const response: AxiosResponse = await axios.get(
        this.apiUrl + '/api/' + question
      );
      const data = response.data;
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  static async getAttributes(question: string) {
    try {
      const response: AxiosResponse = await axios.get(
        this.apiUrl + '/api/' + question
      );
      const data = response.data;
      return data.data.attributes;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  static getURL() {
    return this.apiUrl;
  }
}
