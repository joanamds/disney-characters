import React from 'react';
import { connect } from 'react-redux';
import MickeyConfused from '../images/mickey-confused.gif';
import {Card, CardCover, CardContent, Typography } from '@mui/joy';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import CancelIcon from '@mui/icons-material/Cancel';

class CharacterCard extends React.Component {
  render() {
    const { name, imageUrl, films, tvShows, characterFound } = this.props;

    return (
        <div>
          {characterFound ?
            <Card sx={{ minHeight: '400px', width: 320, marginTop: 10, marginRight: 10 }}>
              <CardCover>
                <img
                  src={imageUrl}
                  srcSet={imageUrl}
                  loading="lazy"
                  alt={`imagem da personagem: ${name}`}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="h2" fontFamily="Roboto" fontSize="lg" textColor="#fff" mb={1}>
                  {name}
                </Typography>
                {(films || tvShows) && (
                <Typography
                  textColor="neutral.300"
                  fontFamily="Roboto"
                  startDecorator={!films || films.length === 0 ? <TvIcon /> : <MovieIcon />}
                >
                  {!films ? `Série: ${tvShows}` : `Filme: ${films}`}
                </Typography>
                )}
              </CardContent>
            </Card>
            : (
              <Card sx={{ minHeight: '500px', width: 320 }}>
                <CardCover>
                  <img
                    src={MickeyConfused}
                    srcSet={MickeyConfused}
                    loading="lazy"
                    alt={'Mickey Mouse confuso'}
                  />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                  }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography
                    textColor="neutral.300"
                    startDecorator={<CancelIcon />}
                    fontFamily="Roboto"
                  >
                    Personagem não encontrado
                  </Typography>
                </CardContent>
              </Card>
            )
          }
          </div>
      )
    }
  }


export default connect()(CharacterCard);