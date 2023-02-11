import React from 'react';
import { fetchCharacter } from './redux/actions';
import { connect } from 'react-redux';
import './App.css';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disneyCharacter: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      disneyCharacter: target.value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { disneyCharacter } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchCharacter(disneyCharacter));
    this.setState({
      disneyCharacter: '',
    });
  }

  render() {
    const { disneyCharacter } = this.state;
    return (
      <div className="App">
        <h1>Disney Characters</h1>
        <div className="search-content">
          <input
            type="text"
            value={ disneyCharacter }
            placeholder="Pesquise um personagem"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Search
          </button>
        </div>
        <div className="character-found">
            <CharacterCard />
        </div>
      </div>
    );
  }
}

export default connect()(App);
