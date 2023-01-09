import { INCREMENT, DECREMENT, INPUTTEXT, COMMENT_CREATE } from './Types';

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

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    payload: { text: text, id: id },
  };
};
