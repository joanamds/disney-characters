const INITIAL_STATE = {
  characterFound: false,
  name: '',
  imageUrl: '',
  film: '',
  tvShows: '',
}

export const GET_CHARACTER = 'GET_CHARACTER';

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER: {
      return {
        ...state,
        characterFound: false,
      }
    }
    case GET_CHARACTER: {
      return {
        ...state,
        characterFound: true,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        films: action.payload.films[0],
        tvShows: action.payload.tvShows[0],
      };
    }
    default:
      return state;
  }
}

export default rootReducer;