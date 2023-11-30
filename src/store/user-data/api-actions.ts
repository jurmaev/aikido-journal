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
    data: { accessToken },
  } = await api.post<Token>(`${ApiRoute.User}/register`, user);
  return accessToken;
});

export const login = createAsyncThunk<
  string,
  UserLogin,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('users/register', async (user, { extra: api }) => {
  const {
    data: { accessToken },
  } = await api.post<Token>(`${ApiRoute.User}/login`, user);
  return accessToken;
});
