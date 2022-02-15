import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('Pruebas en el componente <App/>', () => {
  test('Debería de renderizarse', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
