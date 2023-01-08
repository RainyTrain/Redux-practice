import { combineReducers } from 'redux';
import { likesReducer } from './LikesReducer';
import { inputReducer } from './InputReducer';

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
});
