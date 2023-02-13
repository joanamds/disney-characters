import React from 'react';
import { connect } from 'react-redux';
import MickeyConfused from '../images/mickey-confused.gif';
import LoadingDisney from '../images/loading-disney.gif';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

class CharacterCard extends React.Component {
  render() {
    const { name, imageUrl, films, tvShows, characterFound, searchCharacter } = this.props;

    return (
      <div>
        {searchCharacter ? <img src={LoadingDisney} alt="Loading disney"/>
          : (
            <Card sx={{maxWidth: 250, padding: 6}} centered>
              {characterFound ?
                <CardActionArea>
                  <Typography sx={{textAlign: 'center'}} component="div" variant="h5" gutterBottom>
                    {name} 
                  </Typography>
                  <CardMedia
                    component="img"
                    image={imageUrl}
                    width="50"
                    alt={`imagem da personagem: ${name}`} />
                  <CardContent>
                  <h4>Aparece em:</h4>
                    <p> {!films ? `Série: ${tvShows}` : `Filme: ${films}`} </p>
                  </CardContent>
                </CardActionArea>
                : (
                  <CardActionArea>
                    <img src={MickeyConfused} alt="Mickey Mouse confuso" width="200" />
                    <h3>Personagem não encontrado</h3>
                  </CardActionArea>
                )
              }
              </Card>
          )
        }
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
});

export default connect(mapStateToProps)(CharacterCard);