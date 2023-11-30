export type UserData = {
  number: string;
  name: string;
  surname: string;
  patronymic?: string;
  role: 'coach' | 'parent';
  password: string;
};
