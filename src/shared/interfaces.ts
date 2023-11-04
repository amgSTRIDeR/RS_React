import React from 'react';

interface AppState {
  searchFilter: string;
  characters: Character[];
}

interface MainProps {
  characters: Character[];
}

interface HeaderProps {
  onSearch: (search: string) => void;
  searchFilter: string;
}

interface ErrorButtonProps {
  showTestError: () => void;
}

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface HeaderState {
  searchFilter: string;
  testError: boolean;
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

export type {
  AppState,
  MainProps,
  Character,
  CharacterProps,
  HeaderProps,
  HeaderState,
  ErrorButtonProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
};
