export type UserRegister = {
  phone_number: string;
  name: string;
  surname: string;
  patronymic?: string;
  role: 'coach' | 'parent';
  password: string;
};

export type UserLogin = {
  username: string;
  password: string;
};

export type Token = {
  accessToken: string;
  tokenType: string;
};
