import { createAsyncThunk } from '@reduxjs/toolkit';
import { Group, Groups } from '../../types/group';
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

export const createGroup = createAsyncThunk<
  Group,
  Group,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/create', async (group, { extra: api }) => {
  const { data } = await api.post<Group>(`${ApiRoute.Groups}/create`, group);
  return data;
});

export const removeGroup = createAsyncThunk<
  string,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/remove', async (name, { extra: api }) => {
  await api.get(`${ApiRoute.Groups}/remove/${name}`);
  return name;
});
