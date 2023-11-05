import axios from 'axios';

export default class AsideService {
  static isLoading = false;

  static async getCharacter(id: string) {
    this.isLoading = true;

    const character = await axios
      .get(`https://rickandmortyapi-sigma.vercel.app/api/character/?id=${id}`)
      .then((response) => {
        return response.data[0];
      })
      .catch((error) => {
        console.error(
          `Character request error: ${error.message}; \nCode: ${error.code}`
        );
        return {};
      });
    this.isLoading = false;
    return character;
  }
}
