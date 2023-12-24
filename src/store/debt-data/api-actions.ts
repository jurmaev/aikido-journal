import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Debt } from '../../types/debt';
import { ApiRoute } from '../../const';

export const fetchDebt = createAsyncThunk<
  Debt[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('debt/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<Debt[]>(
    `${ApiRoute.Groups}/get_payment_arrears`
  );
  return data;
});
