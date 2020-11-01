import * as constants from '../actions/constants'

const init = {}

const heroReducer = (state = init, action) => {
  switch (action.type) {
    case constants.GET_HERO_DATA:
      return action.data;
    default:
      return state
  }
}

export default heroReducer;