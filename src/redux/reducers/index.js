const INITIAL_STATE = {
  searchCharacter: false,
  characterFound: false,
  name: '',
  imageUrl: '',
  film: '',
  tvShows: '',
}

export const GET_CHARACTER = 'GET_CHARACTER';

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';

export const NOT_FOUND = 'NOT_FOUND';

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER: {
      return {
        ...state,
        searchCharacter: true,
      }
    }
    case GET_CHARACTER: {
      return {
        ...state,
        characterFound: true,
        searchCharacter: false,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        films: action.payload.films[0],
        tvShows: action.payload.tvShows[0],
      };
    }
    case NOT_FOUND: {
      return {
        ...state,
        characterFound: false,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;