import React from 'react';
import { fetchCharacter, fetchAllCharacters } from './redux/actions';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import './App.css';
import { Container } from '@mui/joy';
import LoadingDisney from './images/loading-disney.gif';
import Grid from '@mui/joy/Grid';

// import SteamboatWillie from './images/steamboat-willie.gif';

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

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const { disneyCharacter } = this.state;
      if (disneyCharacter.length >= 2) {
        const { dispatch } = this.props;
        dispatch(fetchCharacter(disneyCharacter));
        this.setState({
          disneyCharacter: '',
        });
      }
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllCharacters());
  }

  onClickHeader = () => {
    const { dispatch } = this.props;
    dispatch(fetchAllCharacters());
    this.setState({
      search: false,
    });
  }


  render() {
    const { disneyCharacter } = this.state;
    const { characterFound, searchCharacter, characters } = this.props;
    console.log(characters);

    return (
      <div>
        <Header
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          disneyCharacter={disneyCharacter}
          onClickHeader={ this.onClickHeader }
        />
        {searchCharacter ?
          <Container style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 250,
          }}>
            <img src={LoadingDisney} alt="Loading disney" width="300" />
          </Container>
          : (
            <div>
                <Grid
  container
  spacing={{ xs: 2, md: 3 }}
  columns={{ xs: 4, sm: 8, md: 12 }}
  sx={{ flexGrow: 1 }}
  alignItems="center"
  justifyContent="center"
>
  {Array.isArray(characters)
    ? characters.map((character) => (
        <CharacterCard
          key={character.name} // ou character.id, se tiver
          name={character.name}
          imageUrl={character.imageUrl}
          films={character.films?.[0]}
          tvShows={character.tvShows?.[0]}
          characterFound={characterFound}
          searchCharacter={searchCharacter}
        />
      ))
    : characters && (
        <CharacterCard
          name={characters.name}
          imageUrl={characters.imageUrl}
          films={characters.films?.[0]}
          tvShows={characters.tvShows?.[0]}
          characterFound={characterFound}
          searchCharacter={searchCharacter}
        />
      )}
</Grid>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characterFound: state.characterFound,
  name: state.name,
  imageUrl: state.imageUrl,
  films: state.films,
  tvShows: state.tvShows,
  searchCharacter: state.searchCharacter,
  characters: state.characters,
});

export default connect(mapStateToProps)(App);
