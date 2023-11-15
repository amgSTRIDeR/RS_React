import { render, waitFor } from '@testing-library/react';
import DetailsComponent from './DetailsComponent';

describe('Characters component', () => {
  it('should render relevant card data', async () => {
    render(
      <DetailsComponent
        details={{
          name: 'Beth Smith',
          status: 'Alive',
          species: 'Human',
          id: '4',
          location: 'Earth (Replacement Dimension)',
          origin: 'Earth',
        }}
      />
    );

    await waitFor(() => {
      const detailsInfo = document.querySelectorAll(
        '.details__info p'
      ) as NodeListOf<Element>;

      expect(detailsInfo[0].textContent).toBe('Species: Human');
      expect(detailsInfo[1].textContent).toBe('Origin: Earth');
      expect(detailsInfo[2].textContent).toBe(
        'Location: Earth (Replacement Dimension)'
      );
      expect(detailsInfo[3].textContent).toBe('Status: Alive');
    });
  });

  //   it('should render relevant card data', async () => {
  //     render(<CharacterComponent key={1} id={2} name="Rick Sanchez" />);

  //     await waitFor(() => {
  //       const characterImage = document.querySelector(
  //         '.character__image'
  //       ) as HTMLImageElement;

  //       expect(characterImage.alt).toBe('Rick Sanchez');
  //       expect(characterImage.src).toBe(
  //         'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  //       );
  //     });
  //   });
});
