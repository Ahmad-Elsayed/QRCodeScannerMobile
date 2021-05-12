import { SET_COUNTER } from '../actions/counter';

const INITIAL_STATE = {
  count: 0,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_COUNTER:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}
