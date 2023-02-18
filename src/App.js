import React from 'react';
import { fetchCharacter } from './redux/actions';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import './App.css';
import { Container } from '@mui/joy';
import SteamboatWillie from './images/steamboat-willie.gif';

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
        <Container style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 40
        }}>
        {search ? (
              <CharacterCard />
          ) : (
              <div>
                <img
                  src={SteamboatWillie}
                  alt="steamboat willie" width="500"
                  style={{ borderRadius: 50, marginTop: 100 }}
                />
                <h1
                  style={{ color: 'white', fontFamily: 'Roboto', textAlign: 'center' }}
                >
                  Vamos lá!
                </h1>
              </div>
          )}
        </Container>
      </div>
    );
  }
}

export default connect()(App);
