import React from 'react';

interface HomeProps {
  updateCharacters: (searchFilter: string, charactersPerPage: string) => void;
  updateCharactersOnPage: (pageNumber?: string) => void;
  characters: Character[];
}

interface MainProps {
  isCharactersLoading: boolean;
  isDetailsLoading: boolean;
  details: {
    name: string;
    status: string;
    species: string;
    id: string;
    location: string;
    origin: string;
  };
}

interface HeaderProps {
  pagesCount: number;
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
interface Details {
  details: {
    name: string;
    status: string;
    species: string;
    id: string;
    location: string;
    origin: string;
  };
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
  pagesCount: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
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
  Details,
};
