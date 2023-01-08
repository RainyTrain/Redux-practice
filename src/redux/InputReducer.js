import { INPUTTEXT } from './Types';

const initialState = {
  text: '',
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUTTEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
