import axios from 'axios';

import { validateUrl } from '../utils/helpers';

// This is a wrapper around axios.get that validates the URL before making the request. It currently
// only supports GET requests - which is probably enough for our scope.
export default class ApiClient {
  static validateURL(url) {
    return validateUrl(url);
  }

  static async get(url) {
    const isValidURL = ApiClient.validateURL(url);
    if (!isValidURL) {
      return {
        error: "Invalid URL",
        data: null,
      };
    }
    try {
      const response = await axios.get(url);
      return { data: response.data, error: null };
    } catch (error) {
      console.log("Something went wrong, the API call failed.", error);
      return {
        error: "Something went wrong, the API call failed.",
        data: null,
      };
    }
  }
}
