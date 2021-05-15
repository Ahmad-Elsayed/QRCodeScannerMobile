import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_COUNTER, incrementCounter } from 'src/store/actions/counter';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('actions', () => {
  it('should add 10 to counter', () => {
    const store = mockStore({});
    store.dispatch(incrementCounter(10));

    const expectedPayload = {
      type: SET_COUNTER,
      payload: 10,
    };

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    expect(actions).toEqual([expectedPayload]);
  });
  it('should add 10 to previous counter', () => {
    const store = mockStore({ counter: { count: 20 } });
    store.dispatch(incrementCounter(10));

    const expectedPayload = {
      type: SET_COUNTER,
      payload: 30,
    };

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    expect(actions).toEqual([expectedPayload]);
  });
});
