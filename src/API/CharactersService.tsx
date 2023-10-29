import axios from 'axios';

export default class CharactersService {
  static async getCharacters(filter: string) {
    const characters = axios
      .get(`https://rickandmortyapi.com/api/character?name=${filter}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.error(
          `Characters request error: ${error.message}; \nCode: ${error.code}`
        );
        return [];
      });
    return characters;
  }
}
