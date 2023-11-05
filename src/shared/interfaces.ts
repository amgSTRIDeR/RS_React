import React from 'react';

interface BodyProps {
  updateCharacters: (search: string) => void;
  characters: Character[];
}

interface MainProps {
  characters: Character[];
}

interface HeaderProps {
  onSearch: (search: string) => void;
}

interface ErrorButtonProps {
  showTestError: () => void;
}

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorPageProps {
  header: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: string;
  origin: string;
  image?: string;
}

interface CharacterProps extends Character {
  key: number;
}

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export type {
  BodyProps,
  MainProps,
  Character,
  CharacterProps,
  HeaderProps,
  ErrorButtonProps,
  ErrorPageProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ImageProps,
};
