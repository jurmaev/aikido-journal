import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Parent, Parents } from '../../types/parents';

export const getParents = createAsyncThunk<
  Parents,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('parents/get', async (_arg, { extra: api }) => {
  const { data } = await api.get<Parents>(`${ApiRoute.Parents}/all`);
  return data;
});

export const setChild = createAsyncThunk<
  Parent,
  { parentId: string; childId: string },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('parents/setChild', async ({ parentId, childId }, { extra: api }) => {
  const { data } = await api.get<Parent>(
    `${ApiRoute.Parents}/${parentId}/add_child/${childId}`
  );
  return data;
});
