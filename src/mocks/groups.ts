import { Group } from '../types/group';
import { children } from './children';

export const groups: Group[] = [
  {
    id: 'dc538d26-cbfe-4deb-92fd-7ca0a117292c',
    name: 'Группа 1',
    price: 250,
    children: children,
    days: [
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      null,
    ],
  },
  {
    id: 'cf2029f9-ee8c-4186-9e72-f47a2e32ebd0',
    name: 'Группа 2',
    price: 250,
    children: children,
    days: [
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      null,
    ],
  },
  {
    id: '755fc4fc-2451-416b-85d8-6d716c95b3ae',
    name: 'Группа 3',
    price: 250,
    children: children,
    days: [
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      {
        start: '18:30',
        end: '19:30',
      },
      null,
      null,
    ],
  },
];
