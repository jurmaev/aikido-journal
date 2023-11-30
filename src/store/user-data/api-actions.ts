import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State, UserData } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

export const register = createAsyncThunk<
  void,
  UserData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('users/register', async (user, { extra: api }) => {
  const { data } = await api.post(`${ApiRoute.User}/register`, user);
  console.log(data);
});
