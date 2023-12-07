import { createAsyncThunk } from '@reduxjs/toolkit';
import { Groups } from '../../types/group';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';

export const fetchGroups = createAsyncThunk<
  Groups,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<Groups>(`${ApiRoute.Groups}/leads`);
  return data;
});