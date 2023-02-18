import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import MickeyIcon from '../images/mickey-logo.png';
import {Search, SearchIconWrapper, StyledInputBase } from './InputComponents';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#121212',
    },
    background: {
      paper: '#424242',
      default: '#121212',
    },
  },
});
class Header extends React.Component {

  render() {
    const { handleChange, handleKeyPress, disneyCharacter } = this.props;

    return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={ MickeyIcon } alt="icon do mickey" width="40"/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'New Walt Disney Font',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                fontSize: 30,
                marginRight: 15,
                marginLeft: 3,
              }}
            >
              Disney Characters
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
                <StyledInputBase
                placeholder="Procure um personagem..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={disneyCharacter}
              />
              </Search>
              <Button
                component="a"
                href="https://disneyapi.dev/"
                target="_blank"
                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 10 }}
              >
                Disney API
              </Button>
              <IconButton
                component="a"
                href="https://github.com/joanamds/disney-characters"
                target="_blank"
                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 5 }}
              >
                <GitHubIcon />
              </IconButton>
          </Toolbar>
        </Container>
        </AppBar>
        </ThemeProvider>
    );
  }
  }

export default Header;