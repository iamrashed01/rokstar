import axios from 'axios';
import cookie from 'js-cookie';
const appUrl = 'https://rokstars.herokuapp.com/';
const baseUrl = 'https://rokstars.herokuapp.com/api/';

function removeAuthToken() {
  cookie.remove('_access_token');
}

function getAccessToken() {
  return cookie.get('_access_token') === undefined
    ? ''
    : cookie.get('_access_token');
}

function apiRequest(url, params, query = null) {
  const headers = {
    "x-auth-token": getAccessToken(),
    "Accept": "application/json"
  }

  let requestUrl = '';
  if (query !== null) {
    requestUrl = baseUrl + url + query;
  } else {
    requestUrl = baseUrl + url;
  }

  return axios({
    url: requestUrl,
    method: 'get',
    data: params,
    headers
  })
}

function postRequest(url, params, query = null) {
  const headers = {
    "x-auth-token": getAccessToken(),
    "Accept": "application/json"
  }

  let requestUrl = '';
  if (query !== null) {
    requestUrl = baseUrl + url + query;
  } else {
    requestUrl = baseUrl + url;
  }

  return axios({
    url: requestUrl,
    method: 'post',
    data: params,
    headers
  })
}

export { appUrl, apiRequest, postRequest, removeAuthToken };