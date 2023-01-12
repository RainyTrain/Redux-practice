import {
  INCREMENT,
  DECREMENT,
  INPUTTEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from './Types';

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

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    payload: { text: text, id: id },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    payload: id,
  };
};

export const commentsLoad = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  const data = await response.json();
  console.log(data);
  dispatch({
    type: COMMENTS_LOAD,
    payload: data,
  });
};
