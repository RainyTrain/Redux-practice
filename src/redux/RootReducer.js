import { combineReducers } from 'redux';
import { likesReducer } from './LikesReducer';

export const rootReducer = combineReducers({
  likesReducer,
});
