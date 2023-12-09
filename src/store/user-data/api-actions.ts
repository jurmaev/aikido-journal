import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, LoginData, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Token, UserLogin, UserRegister } from '../../types/user';
import { jwtDecode } from 'jwt-decode';

export const register = createAsyncThunk<
  LoginData,
  UserRegister,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('users/register', async (user, { extra: api }) => {
  const {
    data: { access_token },
  } = await api.post<Token>(`${ApiRoute.User}/register`, user);
  const role: 'parent' | 'coach' = jwtDecode(access_token).user_role;
  return { token: access_token, role: role };
});

export const login = createAsyncThunk<
  LoginData,
  UserLogin,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('users/login', async (user, { extra: api }) => {
  const formData = new FormData();
  formData.append('username', user.username);
  formData.append('password', user.password);
  const {
    data: { access_token },
  } = await api.post<Token>(`${ApiRoute.User}/login`, formData);
  const role: 'parent' | 'coach' = jwtDecode(access_token).user_role;
  return { token: access_token, role: role };
});
