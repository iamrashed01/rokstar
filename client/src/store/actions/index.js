import { apiRequest, postRequest, removeAuthToken } from '../../utils/requests'
import * as constants from './constants'
import cookie from 'js-cookie';

export const throwSuccessAction = data => dispatch => {
  dispatch({
    type: constants.THROW_SUCCESS,
    data
  })
}

export const throwErrorAction = data => dispatch => {
  dispatch({
    type: constants.THROW_ERROR,
    data
  })
}

export const getHeroDataAction = () => dispatch => {
  apiRequest('hero')
    .then((res) => {
      dispatch({
        type: constants.GET_HERO_DATA,
        data: res.data
      })
    }).catch((err) => { });
}

export const loginAction = data => dispatch => {
  postRequest('auth/login', data)
    .then((res) => {
      cookie.set('_access_token', res.data.token);
      dispatch({
        type: constants.SET_USER,
        data: res.data.data
      })
    }).catch((err) => {
      dispatch({
        type: constants.THROW_ERROR,
        data: err.response.data.message
      })
    });
}

export const logoutAction = () => dispatch => {
  removeAuthToken();
  dispatch({
    type: constants.SET_USER,
    data: null
  })
}

export const getUser = () => dispatch => {
  apiRequest('users')
    .then((res) => {
      dispatch({
        type: constants.SET_USER,
        data: res.data.data
      })
    }).catch((err) => {
      if (err.response) {
        dispatch({
          type: constants.THROW_ERROR,
          data: err.response.data.message
        })
      } else {
        dispatch({
          type: constants.THROW_ERROR,
          data: err.message
        })
      }
    });
}

export const updateHeroAction = data => dispatch => {
  postRequest('hero', data)
    .then((res) => {
      dispatch({
        type: constants.GET_HERO_DATA,
        data: res.data
      })
    }).catch((err) => { });
}