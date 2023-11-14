import React from 'react';

interface HomeProps {
  updateCharacters: (searchFilter: string, charactersPerPage: string) => void;
  updateCharactersOnPage: (pageNumber?: string) => void;
  characters: Character[];
}

interface MainProps {
  characters: Character[];
}

interface HeaderProps {
  onSearch: (searchFilter: string, charactersPerPage: string) => void;
  updateCharactersOnPage: (pageNumber?: string) => void;
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

interface ApiResponse {
  characters: Character[];
  pagesCount: number;
}

interface CharacterProps extends Character {
  key: number;
}

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

interface PageControlProps {
  updateCharactersOnPage: (pageNumber?: string) => void;
}

export type {
  HomeProps,
  MainProps,
  Character,
  CharacterProps,
  HeaderProps,
  ErrorButtonProps,
  ErrorPageProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ImageProps,
  ButtonProps,
  PageControlProps,
  ApiResponse,
};
