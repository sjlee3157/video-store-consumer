import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import './AppRouter.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
