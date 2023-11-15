import { render, waitFor } from '@testing-library/react';
import axios from '../../__mocks__/axios';
import MainComponent from './MainComponent';
import { CharactersContext } from '../../contexts/CharactersContext';
import { ApiResponse } from '../../shared/interfaces';
import { DetailsContext } from '../../contexts/DetailsContext';

describe('MainComponent', () => {
  it('should render specific numbers of characters cards', async () => {
    const container = document.createElement('div');
    await axios.get().then((response: ApiResponse) => {
      const mockCharacters = response.characters;
      render(
        <CharactersContext.Provider
          value={{ characters: mockCharacters, setCharacters: () => {} }}
        >
          <MainComponent
            isDetailsLoading={false}
            isCharactersLoading={false}
            details={{
              status: '',
              species: '',
              id: '',
              location: '',
              origin: '',
              name: '',
            }}
          />
        </CharactersContext.Provider>
      );
      waitFor(() => {
        expect(container.querySelectorAll('character').length).toBe(3);
      });
    });
  });

  it('should show correct message when characters not found', async () => {
    const container = document.createElement('div');

    render(
      <CharactersContext.Provider
        value={{ characters: [], setCharacters: () => {} }}
      >
        <MainComponent
          isDetailsLoading={false}
          isCharactersLoading={false}
          details={{
            status: '',
            species: '',
            id: '',
            location: '',
            origin: '',
            name: '',
          }}
        />
      </CharactersContext.Provider>
    );
    waitFor(() => {
      expect(container.querySelector('.unfound-message')?.textContent).toBe(
        'Characters not foun'
      );
    });
  });

  it('should show loader while fetching data for details', async () => {
    render(
      <CharactersContext.Provider
        value={{ characters: [], setCharacters: () => {} }}
      >
        <DetailsContext.Provider
          value={{ detailsParam: 1, setDetailsParams: () => {} }}
        >
          <MainComponent
            isDetailsLoading={true}
            isCharactersLoading={false}
            details={{
              status: '',
              species: '',
              id: '',
              location: '',
              origin: '',
              name: '',
            }}
          />
        </DetailsContext.Provider>
      </CharactersContext.Provider>
    );
    const loaderElement = document.querySelectorAll('.loader');
    expect(loaderElement.length).toBe(1);
  });
  
  it('should show loader while fetching data for details', async () => {
    render(
      <CharactersContext.Provider
        value={{ characters: [], setCharacters: () => {} }}
      >
        <DetailsContext.Provider
          value={{ detailsParam: 1, setDetailsParams: () => {} }}
        >
          <MainComponent
            isDetailsLoading={true}
            isCharactersLoading={false}
            details={{
              status: '',
              species: '',
              id: '',
              location: '',
              origin: '',
              name: '',
            }}
          />
        </DetailsContext.Provider>
      </CharactersContext.Provider>
    );
    const loaderElement = document.querySelectorAll('.loader');
    expect(loaderElement.length).toBe(1);
  });
});
