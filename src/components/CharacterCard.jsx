import React from 'react';
import { connect } from 'react-redux';
import './CharacterCard.css';

class CharacterCard extends React.Component {
  render() {
    const { name, imageUrl, films, tvShows, characterFound } = this.props;

    return (
      <div className="character-card">
        {!characterFound ? 
            <p>Personagem não encontrado</p>
          : (
          <>
          <h3> { name } </h3>
          <img src={imageUrl} alt={ `imagem da personagem: ${name}`}/>
          <h4>Aparece em:</h4>
          <p> { !films ? `Série: ${tvShows}` : `Filme: ${films}`} </p>
          </>
          )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  characterFound: state.characterFound,
  name: state.name,
  imageUrl: state.imageUrl, 
  films: state.films,
  tvShows: state.tvShows,
});

export default connect(mapStateToProps)(CharacterCard);