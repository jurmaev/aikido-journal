import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { DebtData } from '../../types/state';
import { fetchDebt } from './api-actions';

const initialState: DebtData = {
  debt: [],
};

export const debtData = createSlice({
  name: Namespace.Debt,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDebt.fulfilled, (state, action) => {
      state.debt = action.payload;
    });
  },
});
