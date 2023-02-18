import React from 'react';
import { fetchCharacter } from './redux/actions';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disneyCharacter: '',
      search: false,
      characters: [],
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      disneyCharacter: target.value,
    });
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const { disneyCharacter } = this.state;
      if (disneyCharacter.length >= 2) {
        const { dispatch } = this.props;
        dispatch(fetchCharacter(disneyCharacter));
        this.setState({
          disneyCharacter: '',
          search: true,
        });
      }
    }
  }


  render() {
    const { disneyCharacter, search } = this.state;
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          disneyCharacter={disneyCharacter}
        />
        {search && (
          <div className="character-found">
              <CharacterCard />
          </div>)}
      </div>
    );
  }
}

export default connect()(App);
