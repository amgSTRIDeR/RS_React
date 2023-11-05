import axios from 'axios';

export default class CharactersService {
  static isLoading = true;
  static pagesCount = '0';
  static amountOfCharacters = 0;
  static charactersPerPage = '10';
  static searchFilter = '';
  static currentPage = '1';

  static async getCharacters(searchFilter: string, charactersPerPage: string) {
    this.isLoading = true;
    this.charactersPerPage = charactersPerPage;
    this.searchFilter = searchFilter;
    const searchQuery = searchFilter ? `q=${searchFilter}` : '';
    this.amountOfCharacters = await axios
      .get(
        `https://rickandmortyapi-sigma.vercel.app/api/character/?${searchQuery}`
      )
      .then((response) => {
        return response.data.length;
      })
      .catch((error) => {
        console.error(
          `Characters request error: ${error.message}; \nCode: ${error.code}`
        );
        return 0;
      });

    this.countPages();
    const characters = await this.getCharactersOnPage(this.currentPage);
    this.isLoading = false;
    return characters;
  }

  static async getCharactersOnPage(pageNumber: string = this.currentPage) {
    this.isLoading = true;
    const searchQuery = this.searchFilter ? `?q=${this.searchFilter}` : '';
    const characters = await axios
      .get(
        `https://rickandmortyapi-sigma.vercel.app/api/character/?${searchQuery}&_limit=${this.charactersPerPage}&_page=${pageNumber}`
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

  static countPages() {
    this.pagesCount = Math.ceil(
      this.amountOfCharacters / +this.charactersPerPage
    ).toString();
    if (+this.currentPage > +this.pagesCount) {
      this.currentPage = this.pagesCount;
    }
  }
}
