import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import Navigation from 'navigation';
import './ReactotronConfig';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
