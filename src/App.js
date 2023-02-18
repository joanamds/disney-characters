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
      search: false,
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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllCharacters());
  }


  render() {
    const { disneyCharacter, search } = this.state;
    const { name, imageUrl, films, tvShows, characterFound, searchCharacter, characters } = this.props;
    console.log(characters);

    return (
      <div>
        <Header
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          disneyCharacter={disneyCharacter}
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
              {search ? (
                <Container style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 40,
                  marginBottom: 80,
                }}>
                  <CharacterCard
                    name={name}
                    imageUrl={imageUrl}
                    films={films}
                    tvShows={tvShows}
                    characterFound={characterFound}
                  />
                </Container>
              ) : (
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{ flexGrow: 1 }}
                  alignItems="center"
                  justifyContent="center"
                >
                  {characters.map((character) => {
                    return (<CharacterCard
                      name={character.name}
                      imageUrl={character.imageUrl}
                      films={character.films[0]}
                      tvShows={character.tvShows[0]}
                      characterFound={characterFound}
                      searchCharacter={searchCharacter}
                    />)
                  })}
                </Grid>
              )}
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
