import * as constants from '../actions/constants'

const init = {
  user: null,
  error: {}
}

const metaReducer = (state = init, action) => {
  switch (action.type) {
    case constants.THROW_SUCCESS:
      return {
        ...state,
        error: {
          message: action.data
        }
      }
    case constants.THROW_ERROR:
      return {
        ...state,
        error: {
          message: action.data
        }
      }
    case constants.SET_USER:
      return {
        ...state,
        user: action.data
      };
    default:
      return state
  }
}

export default metaReducer
