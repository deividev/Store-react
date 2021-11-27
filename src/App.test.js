import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
//Store
import store from './redux/index';

test('renders App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

});
