import React from 'react';
import { fetchCharacter } from './redux/actions';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, Paper } from '@mui/material';
import './App.css';
import { Container } from '@mui/system';

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

  handleClick = (event) => {
    event.preventDefault();
    const { disneyCharacter } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchCharacter(disneyCharacter));
    this.setState({
      disneyCharacter: '',
      search: true,
    });
  }

  render() {
    const { disneyCharacter, search } = this.state;
    return (
      <div>
        <h1>Disney Characters</h1>
        <Container fixed>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700, marginBottom: 5 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            type="text"
            value={ disneyCharacter }
            placeholder="Pesquise um personagem"
            onChange={this.handleChange}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="button"
            onClick={this.handleClick}
            sx={{ p: '10px' }} aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {search && (
          <div className="character-found">
              <CharacterCard />
          </div>)}
          </Container>
      </div>
    );
  }
}

export default connect()(App);
