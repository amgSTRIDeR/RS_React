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
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      created: '2017-11-04T19:26:56.301Z',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      type: '',
      gender: 'Female',
      created: '2017-11-04T19:50:28.250Z',
      origin: 'Abadango',
      location: 'Abadango',
    },
    {
      id: 7,
      name: 'Abradolf Lincler',
      status: 'unknown',
      species: 'Human',
      type: 'Genetic experiment',
      gender: 'Male',
      created: '2017-11-04T19:59:20.523Z',
      origin: 'Earth (Replacement Dimension)',
      location: 'Testicle Monster Dimension',
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      created: '2017-11-04T20:03:34.737Z',
      origin: 'unknown',
      location: 'Citadel of Ricks',
    },
    {
      id: 9,
      name: 'Agency Director',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      created: '2017-11-04T20:06:54.976Z',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
    },
    {
      id: 10,
      name: 'Alan Rails',
      status: 'Dead',
      species: 'Human',
      type: 'Superhuman (Ghost trains summoner)',
      gender: 'Male',
      created: '2017-11-04T20:19:09.017Z',
      origin: 'unknown',
      location: "Worldender's lair",
    },
  ],
  pagesCount: 78,
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
