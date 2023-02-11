import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import rootReducer from './redux/reducers';

const renderWithRedux = (
  component,
  {
    initialState, 
    store = createStore(combineReducers({rootReducer}), initialState),
  } = {}
  ) => ({
    ...render(<Provider store={store}>{ component }</Provider>),
    store,
})

describe('Testa a aplicação Disney Characters', () => {
  beforeEach(cleanup)
  it('1 - Testa se a aplicação possui o título "Disney Characters"', () => {
    renderWithRedux(<App />);
    
    const appTitle = screen.getByText('Disney Characters'); 
  
    expect(appTitle).toBeInTheDocument();
  });

  it('2 - Testa se a aplicação possui um input para fazer a busca por personagens', () => {
    renderWithRedux(<App />);

    const searchItem = screen.getByRole('textbox');

    expect(searchItem).toBeInTheDocument();
  });

  it('3 - Testa se ao renderizar a aplicação possui a mensagem "Personagem não encontrado"', () => {
    renderWithRedux(<App />);

    const notFound = screen.getByText(/personagem não encontrado/i);

    expect(notFound).toBeInTheDocument();
  })
});
