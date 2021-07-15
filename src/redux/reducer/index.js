import { combineReducers } from 'redux';

import countReducer from '../reducer/countReducer';
import loggingReducer from './loggingReducer';

export const appReducer = combineReducers({
  countReducer,
  loggingReducer
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
