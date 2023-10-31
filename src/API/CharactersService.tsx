import axios from 'axios';

export default class CharactersService {
  static isLoading = false;

  static async getCharacters(filter: string) {
    this.isLoading = true;
    const characters = await axios
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
    this.isLoading = false;
    return characters;
  }
}
