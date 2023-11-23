import { Child } from './children';

export type Parent = {
  id: string;
  name: string;
  phone: string;
  child: Child | null;
};
