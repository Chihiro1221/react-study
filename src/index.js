import ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
