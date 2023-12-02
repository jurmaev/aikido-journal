import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Parents } from '../../types/parents';

export const getParents = createAsyncThunk<
  Parents,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('parents/get', async (_arg, { extra: api }) => {
  const { data } = await api.get<Parents>(`${ApiRoute.Parents}/all`);
  return data;
});
