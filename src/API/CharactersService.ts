import axios from 'axios';

export async function getCharacters(
  searchFilter: string,
  charactersPerPage: string = '10',
  pageNumber: number = 1
) {
  const searchQuery = searchFilter ? `?q=${searchFilter}` : '';
  try {
    const response = await axios.get(
      `https://rickandmortyapi-sigma.vercel.app/api/character/${searchQuery}`,
      {
        params: {
          _limit: charactersPerPage,
          _page: pageNumber,
        },
      }
    );

    const characters = response.data;
    const amountCharacters = response.headers['x-total-count'];
    const pagesCount = Math.ceil(+amountCharacters / +charactersPerPage) || 1;

    return { characters: characters, pagesCount: pagesCount };
  } catch (error) {
    console.error(`Characters request error: ${error}`);
    return { characters: [], pagesCount: 1 };
  }
}

export async function getCharacter(id: number) {
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
  return character;
}
