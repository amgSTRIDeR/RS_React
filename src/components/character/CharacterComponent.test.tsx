import { render, waitFor } from '@testing-library/react';
import CharacterComponent from './CharacterComponent';

describe('Characters component', () => {
  it('should render relevant card data', async () => {
    render(<CharacterComponent key={1} id={2} name="Rick Sanchez" />);

    await waitFor(() => {
      const characterImage = document.querySelector(
        '.character__image'
      ) as HTMLImageElement;

      expect(characterImage.alt).toBe('Rick Sanchez');
      expect(characterImage.src).toBe(
        'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
      );
    });
  });
});
