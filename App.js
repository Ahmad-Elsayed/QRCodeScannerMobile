import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store/configureStore';
import Navigation from 'navigation';
import './ReactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
