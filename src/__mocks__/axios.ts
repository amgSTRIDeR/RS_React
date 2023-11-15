const mockResponse = {
  characters: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      created: '2017-11-04T18:48:46.250Z',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      created: '2017-11-04T18:50:21.651Z',
      origin: 'unknown',
      location: 'Citadel of Ricks',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      created: '2017-11-04T19:09:56.428Z',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      created: '2017-11-04T19:22:43.665Z',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
    },
  ],
  pagesCount: 11,
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
