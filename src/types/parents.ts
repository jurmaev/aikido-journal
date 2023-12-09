import { Children } from './children';

export type Parent = {
  id: string;
  name: string;
  surname: string;
  patronymic?: string;
  phone_number: string;
  children: Children;
};

export type Parents = Parent[];
