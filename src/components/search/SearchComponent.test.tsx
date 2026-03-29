import { render, fireEvent, waitFor } from '@testing-library/react';
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

  it('Search input retrieve information from the local storage', async () => {
    waitFor(() => {
      localStorage.setItem('searchFilter', 'Summer');
    });

    render(<SearchComponent />);

    const searchInput = document.querySelector(
      '.searchInput'
    ) as HTMLInputElement;

    expect(searchInput.value).toBe('Summer');
  });
});
