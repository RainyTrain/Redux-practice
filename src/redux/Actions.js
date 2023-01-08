import { INCREMENT, DECREMENT, INPUTTEXT } from './Types';

export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementLikes = () => {
  return {
    type: DECREMENT,
  };
};

export const inputText = (text) => {
  return {
    type: INPUTTEXT,
    payload: text,
  };
};
