import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MickeyIcon from '../images/mickey-logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: 0,
width: '100%',
[theme.breakpoints.up('sm')]: {
  marginLeft: theme.spacing(1),
  width: 'auto',
},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '50ch',
    '&:focus': {
      width: '55ch',
    },
  },
  },
'& .Mui-disabled': {
opacity: 0.5, // diminui a opacidade do search bar quando desabilitado
}
}));

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
                color: '#df071f',
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
          </Toolbar>
        </Container>
        </AppBar>
        </ThemeProvider>
    );
  }
  }

export default Header;