import { UserRole } from './state';

export type UserRegister = {
  phone_number: string;
  name: string;
  surname: string;
  patronymic?: string;
  role: UserRole;
  password: string;
};

export type UserLogin = {
  username: string;
  password: string;
};

export type Token = {
  access_token: string;
  token_type: string;
};

export type FullName = {
  name: string;
  surname: string;
  patronymic?: string | null;
};
