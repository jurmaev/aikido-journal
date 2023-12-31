import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Child, Children } from '../../types/children';
import { FullName } from '../../types/user';

export const fetchChildren = createAsyncThunk<
  Children,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('children/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<Children>(`${ApiRoute.Children}/all`);
  return data;
});

export const createChild = createAsyncThunk<
  Child,
  FullName,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('children/create', async (fullName, { extra: api }) => {
  const { data } = await api.post<Child>(
    `${ApiRoute.Children}/create`,
    fullName
  );
  return data;
});

export const removeChild = createAsyncThunk<
  number,
  number,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('children/remove', async (id, { extra: api }) => {
  await api.post<Child>(`${ApiRoute.Children}/remove/${id}`);
  return id;
});

export const fetchChildrenWithoutParentApi = createAsyncThunk<
  Children,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('children/fetchWithoutParent', async (_arg, { extra: api }) => {
  const { data } = await api.get<Children>(
    `${ApiRoute.Children}/children_without_parent`
  );
  return data;
});
