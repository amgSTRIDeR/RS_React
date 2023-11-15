import React from 'react';
import MainComponent from './MainComponent';
import { createRoot } from 'react-dom/client';

describe('MainComponent', () => {
  it('should render specific numbers of characters cards', () => {
    const container = document.createElement('div');
    const root = createRoot(container);

    root.render(<MainComponent isCharactersLoading={false} />);

    expect(container.querySelectorAll('character').length).toBe(10);
  });
});
