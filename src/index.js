import React from 'react';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';
import './App.css';
import './favicon.ico';
const store = configureStore();

render(
  <App store={store} />,
  document.getElementById('app')
);

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept('./App', () => {
      const NewApp = require('./App').default;
      render(
        NewApp({ store }),
        document.getElementById('app')
      );
    });
  }
}
