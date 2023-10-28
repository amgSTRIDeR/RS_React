import axios from 'axios';

export default class CharactersService {
  static async getCharacters(filter: string) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?name=${filter}`
    );
    return response.data.results;
  }
}
