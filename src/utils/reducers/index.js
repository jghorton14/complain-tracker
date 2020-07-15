import { combineReducers } from 'redux'

import login from './login';
import complaint from './complaint';

export default combineReducers({
  login,
  complaint,
})