import { combineReducers } from 'redux';
import { likesReducer } from './LikesReducer';
import { inputReducer } from './InputReducer';
import { commentReducer } from './CoomentsReducer';

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentReducer,
});
