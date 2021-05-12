import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './reducers/counterReducer';

const rootReducer = combineReducers({ counter });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
