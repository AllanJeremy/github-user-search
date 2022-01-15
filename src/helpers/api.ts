import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios';

import { GITHUB_PERSONAL_ACCESS_TOKEN, GITHUB_USERNAME } from 'src/config';

export default (
  baseUrl = 'https://api.github.com',
  additionalHeaders: AxiosRequestHeaders = {}
) => {
  axios.defaults.baseURL = baseUrl;

  // #region UNAUTHENTICATED REQUESTS
  /** Make a standard unauthenticated get request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestParams Any request parameters passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const getRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestParams = {}
  ) => {
    const response: AxiosResponse<T> = await axios.get(url, {
      params: requestParams,
      headers: additionalHeaders,
    });

    return response.data;
  };

  /** Make a standard unauthenticated post request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestData Any data that needs to be passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const postRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestData = {}
  ) => {
    const response: AxiosResponse<T> = await axios.post(url, requestData, {
      headers: additionalHeaders,
    });

    return response.data;
  };

  /** Make a standard unauthenticated patch request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestData Any data that needs to be passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const patchRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestData = {}
  ) => {
    const response: AxiosResponse<T> = await axios.patch(url, requestData, {
      headers: additionalHeaders,
    });

    return response.data;
  };

  /** Make a standard unauthenticated delete request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestParams Any request parameters passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const deleteRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestParams = {}
  ) => {
    const response: AxiosResponse<T> = await axios.delete(url, {
      params: requestParams,
      headers: additionalHeaders,
    });

    return response.data;
  };

  // #endregion UNAUTHENTICATED REQUESTS

  // #region AUTHORIZED REQUESTS
  //* AUTHENTICATION HELPERS
  /** Get authentication details from wherever they are stored (Using storeAuthDetails)
   * @return {Object} An object representing authentication headers dereived from the stored authentication details */
  const _getAuthHeaders = () => {
    return {
      Authorization: `Basic ${btoa(
        `${GITHUB_USERNAME}:${GITHUB_PERSONAL_ACCESS_TOKEN}`
      )}`,
    };
  };

  /** Make an authenticated get request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestParams any data that needs to be passed in as part of the parameters for the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const authorizedGetRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestParams = {}
  ) => {
    const response: AxiosResponse<T> = await axios.get(url, {
      params: requestParams,
      headers: { ..._getAuthHeaders(), ...additionalHeaders },
    });

    return response.data;
  };

  /** Make an authenticated post request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestData Any data that needs to be passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const authorizedPostRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestData = {}
  ) => {
    const response: AxiosResponse<T> = await axios.post(url, requestData, {
      headers: { ..._getAuthHeaders(), ...additionalHeaders },
    });

    return response.data;
  };

  /** Make an authenticated patch request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestData Any data that needs to be passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const authorizedPatchRequest = async <T = Record<string, unknown> | null>(
    url: string,
    requestData = {}
  ) => {
    const response: AxiosResponse<T> = await axios.patch(url, requestData, {
      headers: { ..._getAuthHeaders(), ...additionalHeaders },
    });

    return response.data;
  };

  /** Make an authenticated delete request
   * @param {String} url The url the API request should be sent to
   * @param {Object} requestParams Any data that needs to be passed in as part of the request
   * @return {Promise<Object>} A promise that resolves to the API response if successful. If rejected, the promise returns details of what went wrong with the request.
   */
  const authorizedDeleteRequest = async <T = Record<string, unknown>>(
    url: string,
    requestParams = {}
  ) => {
    const response: AxiosResponse<T> = await axios.delete(url, {
      params: requestParams,
      headers: { ..._getAuthHeaders(), ...additionalHeaders },
    });

    return response.data;
  };

  // #endregion AUTHORIZED REQUESTS

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
    authorizedGetRequest,
    authorizedPostRequest,
    authorizedPatchRequest,
    authorizedDeleteRequest,
  };
};
