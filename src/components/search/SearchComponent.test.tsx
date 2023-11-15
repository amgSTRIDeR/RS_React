import { render, fireEvent } from '@testing-library/react';
import SearchComponent from './SearchComponent';

describe('Characters component', () => {
  it('Clicking the Search button saves the entered value to the local storage', async () => {
    render(<SearchComponent />);

    const searchInput = document.querySelector(
      '.searchInput'
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Morty' } });

    const searchButton = document.querySelector(
      '.searchButton'
    ) as HTMLButtonElement;

    searchButton.click();
    expect(localStorage.getItem('searchFilter')).toBe('Morty');
  });
});
