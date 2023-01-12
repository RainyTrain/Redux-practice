import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from './Types';

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
    case COMMENT_DELETE:
      const indexToDelete = state.comments.findIndex((item) => item.id === action.payload);
      const commentsAfterDeleting = [...state.comments].filter(
        (item) => item.id != state.comments[indexToDelete].id,
      );
      return {
        ...state,
        comments: commentsAfterDeleting,
      };
    case COMMENTS_LOAD:
      const responseData = action.payload.map((item) => {
        return {
          text: item.body,
          id: item.id,
        };
      });
      return {
        ...state,
        comments: responseData,
      };
    default:
      return state;
  }
};
