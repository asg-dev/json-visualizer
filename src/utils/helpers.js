import { API_URLS } from './constants';

// Build query string from filtering options, e.g.: ?key1=value1&key2=value2
const buildQueryParams = (params) => {
  const esc = encodeURIComponent;
  const queryString = params
    .filter((param) => param && !!param.key && !!param.value)
    .map((param) => `${esc(param.key.trim())}=${esc(param.value.trim())}`)
    .join("&");
  return queryString ? `?${queryString}` : "";
};

// Build full URL from base URL and filtering options, e.g.: https://api.com?key1=value1&key2=value2
const buildUrl = (url, params) => {
  return `${url}${buildQueryParams(params)}`;
};

// Validate that the URL is in the API_URLS object, and that it's a valid URL.
const validateUrl = (url) => {
  try {
    const nativeURL = new URL(url);
    nativeURL.search = "";
    if (Object.values(API_URLS).includes(nativeURL.toString())) {
      return true;
    } else {
      console.error("URL not found in API_URLS:", url);
      return false;
    }
  } catch (e) {
    console.error("Invalid URL:", url);
    return false;
  }
};

export { buildQueryParams, buildUrl, validateUrl };
