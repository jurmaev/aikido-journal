import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Parent, Parents } from '../../types/parents';
import { fetchChildrenWithoutParentApi } from '../children-data/api-actions';

export const fetchParents = createAsyncThunk<
  Parents,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('parents/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<Parents>(`${ApiRoute.Parents}/all`);
  return data;
});

export const setChild = createAsyncThunk<
  Parent,
  { parentId: string; childId: number },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'parents/setChild',
  async ({ parentId, childId }, { extra: api, dispatch }) => {
    const { data } = await api.get<Parent>(
      `${ApiRoute.Parents}/${parentId}/add_child/${childId}`
    );
    dispatch(fetchChildrenWithoutParentApi());
    return data;
  }
);

export const removeChild = createAsyncThunk<
  { parentId: string; childId: number },
  { parentId: string; childId: number },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'parents/removeChild',
  async ({ parentId, childId }, { extra: api, dispatch }) => {
    await api.get(`${ApiRoute.Parents}/${parentId}/remove_child/${childId}`);
    dispatch(fetchChildrenWithoutParentApi());
    return {parentId, childId};
  }
);
