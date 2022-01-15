import api from 'src/helpers/api';
import { GithubUserApiResponse, GithubUserDetailResponse } from 'src/types';

//
const { authorizedGetRequest } = api('https://api.github.com', {
  accept: 'application/vnd.github.v3+json',
});

const DEFAULT_PAGE = 1;
const DEFAULT_RESULTS_PER_PAGE = 10;

export default (usernameToUse?: string) => {
  /** Get users matching a search string from the GitHub API */
  const getGithubUsers = (
    searchText: string,
    page = DEFAULT_PAGE,
    resultsPerPage = DEFAULT_RESULTS_PER_PAGE
  ) => {
    const url = `/search/users?q=${searchText}&page=${
      page || DEFAULT_PAGE
    }&per_page=${resultsPerPage || DEFAULT_RESULTS_PER_PAGE}`;

    return authorizedGetRequest<GithubUserApiResponse>(url);
  };

  /** Get the details of a single user based on their username */
  const getGithubUserDetails = (username = '') => {
    const url = `/users/${usernameToUse || username}`;

    return authorizedGetRequest<GithubUserDetailResponse>(url);
  };

  //* URL related
  const _getGithubBaseProfileUrl = (username = '') =>
    `https://github.com/${usernameToUse || username}`;

  /** Get the public facing github profile url
   * @return {string} The public facing GitHub profile url
   */
  const getGithubProfileUrl = (username = '') =>
    _getGithubBaseProfileUrl(username);

  /** Get the public facing github followers url
   * @return {string} The public facing GitHub user's followers url
   */
  const getGithubFollowersUrl = (username = '') =>
    `${_getGithubBaseProfileUrl(username)}?tab=followers`;

  /** Get the public facing github following url
   * @return {string} The public facing GitHub user's following url
   */
  const getGithubFollowingUrl = (username = '') =>
    `${_getGithubBaseProfileUrl(username)}?tab=following`;

  /** Get the public facing github gists url
   * @return {string} The public facing GitHub user's gists url
   */
  const getGithubGistsUrl = (username = '') =>
    `https://gist.github.com/${usernameToUse || username}`;

  /** Get the public facing github repositories url
   * @return {string} The public facing GitHub user's repositories url
   */
  const getGithubRepositoriesUrl = (username = '') =>
    `${_getGithubBaseProfileUrl(username)}?tab=repositories`;

  /** Get the public facing github stars url
   * @return {string} The public facing GitHub user's stars url
   */
  const getGithubStarsUrl = (username = '') =>
    `${_getGithubBaseProfileUrl(username)}?tab=stars`;

  return {
    getGithubUsers,
    getGithubUserDetails,

    //* URL related
    getGithubProfileUrl,
    getGithubFollowersUrl,
    getGithubFollowingUrl,
    getGithubGistsUrl,
    getGithubRepositoriesUrl,
    getGithubStarsUrl,
  };
};
