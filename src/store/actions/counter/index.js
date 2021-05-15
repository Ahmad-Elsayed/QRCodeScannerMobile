export const SET_COUNTER = 'SET_COUNTER';

export const incrementCounter = increase => (dispatch, getState) => {
  const { count } = getState().counter || { count: 0 };
  dispatch({
    type: SET_COUNTER,
    payload: count + increase,
  });
};
