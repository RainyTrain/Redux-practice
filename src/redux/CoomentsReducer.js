import { COMMENT_CREATE, COMMENT_UPDATE } from './Types';

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case COMMENT_UPDATE:
      const newData = action.payload;
      const index = state.comments.findIndex((item) => item.id === newData.id);
      const updatedComments = [
        ...state.comments.slice(0, index),
        newData,
        ...state.comments.slice(index + 1),
      ];
      return {
        ...state,
        comments: updatedComments,
      };
    default:
      return state;
  }
};
