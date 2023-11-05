import axios from 'axios';

export default class CharactersService {
  static isLoading = true;

  static async getCharacters(filter: string) {
    this.isLoading = true;
    const searchQuery = filter ? `?name_like=${filter}` : '';
    const characters = await axios
      .get(
        `https://rickandmortyapi-sigma.vercel.app/api/character${searchQuery}`
      )
      .then((response) => {
        return response.data;
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
