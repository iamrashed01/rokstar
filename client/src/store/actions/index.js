import * as constants from './constants'

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
