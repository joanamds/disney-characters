import React from 'react';
import { connect } from 'react-redux';
import MickeyConfused from '../images/mickey-confused.gif';
import LoadingDisney from '../images/loading-disney.gif';
import { Card } from '@mui/material';

class CharacterCard extends React.Component {
  render() {
    const { name, imageUrl, films, tvShows, characterFound, searchCharacter } = this.props;

    return (
      <div>
        {searchCharacter ? <img src={LoadingDisney} alt="Loading disney"/>
          : (
            <Card>
              {characterFound ?
                <>
                  <h3> {name} </h3>
                  <img src={imageUrl} alt={`imagem da personagem: ${name}`} />
                  <h4>Aparece em:</h4>
                  <p> {!films ? `Série: ${tvShows}` : `Filme: ${films}`} </p>
                </>
                : (
                  <div>
                    <img src={MickeyConfused} alt="Mickey Mouse confuso" width="200" />
                    <h3>Personagem não encontrado</h3>
                  </div>
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