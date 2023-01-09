import { INCREMENT, DECREMENT } from './Types';

const initialState = {
  likes: 0,
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, likes: state.likes + 1 };
    case DECREMENT:
      if (state.likes > 0) {
        return { ...state, likes: state.likes - 1 };
      } else {
        alert('Error');
      }
    default:
      return state;
  }
};
