import axios from 'axios';
import {apiHost} from '../config/constants';

export class ApiModule {
  public static async get<T>(uri: string, param?: T) {
    return await axios
      .get(`${apiHost}/${uri}`, {
        params: param,
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  public static post() {}
  public static put() {}
  public static delete() {}
}
