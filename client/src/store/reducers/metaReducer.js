import * as constants from '../actions/constants'

const init = {
  error: {}
}

const metaReducer = (state = init, action) => {
  switch (action.type) {
    case constants.THROW_SUCCESS:
      return {
        ...state,
        error: {
          msg: action.data
        }
      }
    case constants.THROW_ERROR:
      return {
        ...state,
        error: {
          msg: action.data
        }
      }
    default:
      return state
  }
}

export default metaReducer
