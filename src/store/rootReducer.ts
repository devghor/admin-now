import { combineReducers } from 'redux';
import auth from './auth';
import base from './base';

const rootReducer = combineReducers({
  auth,
  base,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
