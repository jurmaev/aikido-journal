import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Token, UserLogin, UserRegister } from '../../types/user';

export const register = createAsyncThunk<
  string,
  UserRegister,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('users/register', async (user, { extra: api }) => {
  const {
    data: { access_token },
  } = await api.post<Token>(`${ApiRoute.User}/register`, user);
  return access_token;
});

export const login = createAsyncThunk<
  string,
  UserLogin,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('users/login', async (user, { extra: api }) => {
  const formData = new FormData();
  formData.append('username', user.username);
  formData.append('password', user.password);
  const {
    data: { access_token },
  } = await api.post<Token>(`${ApiRoute.User}/login`, formData);
  return access_token;
});
