import { IUserData } from '../interfaces/user-data';

export const MOCK_USERS_ARRAY: IUserData[] = [
  {
    id: 1,
    name: 'First User',
    lastSeen: new Date(2022,11,12),
    lastMessages: [
      {
        userId: 2,
        message: 'hi',
        sent: new Date(2023,4,20),
      },
      {
        userId: 2,
        message: 'how are you',
        sent: new Date(2023,4,22),
      },
      {
        userId: 0,
        message: 'hello',
        sent: new Date(2023,4,21),
      },
      {
        userId: 0,
        message: 'I\'m fine',
        sent: new Date(2023,4,24),
      },
    ]
  },
  {
    id: 2,
    name: 'Second User',
    lastMessages: [
      {
        userId: 1,
        message: 'hello',
        sent: new Date(2023,4,21),
      },
      {
        userId: 1,
        message: 'I\'m fine',
        sent: new Date(2023,4,24),
      },
    ]
  },
  {
    id: 3,
    name: 'Third User',
    lastMessages: [
      {
        userId: 2,
        message: 'hi',
        sent: new Date(2023,4,20),
      },
      {
        userId: 2,
        message: 'how are you',
        sent: new Date(2023,4,22),
      },
    ]
  },
]
