import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import inViewReducer from './inViewReducer';
export default combineReducers({
  email: emailReducer,
  inView: inViewReducer,
});
