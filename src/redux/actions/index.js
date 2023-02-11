import { GET_CHARACTER, REQUEST_CHARACTER, NOT_FOUND } from "../reducers";

export const requestAPI = () => ({
  type: REQUEST_CHARACTER,
});

export const getCharacter = (payload) => ({
  type: GET_CHARACTER,
  payload,
});

export const notFound = () => ({
  type: NOT_FOUND,
})

export const fetchCharacter = (name) => {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch(`https://api.disneyapi.dev/character?name=${name}`);
      const characterFound = await response.json();
      const { data } = characterFound;
      if (data.length === 0) return dispatch(notFound());
      return dispatch(getCharacter(data[0]));
    } catch(error) {
      console.error(error);
    }
  }
}

