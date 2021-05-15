import counterReducer from '../../src/store/reducers/counterReducer';
import { SET_COUNTER } from '../../src/store/actions/counter';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({
      count: 0,
    });
  });

  it('should handle add 10 to count', () => {
    expect(
      counterReducer(
        {},
        {
          type: SET_COUNTER,
          payload: 10,
        },
      ),
    ).toEqual({
      count: 10,
    });
  });
});
