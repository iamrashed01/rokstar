import {
  combineReducers
} from 'redux';
import metaReducer from './metaReducer';
import heroReducer from './heroReducer';

const rootReducer = combineReducers({
  meta: metaReducer,
  hero: heroReducer
});
export default rootReducer;
