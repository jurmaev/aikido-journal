import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ParentData } from '../../types/state';
import { fetchChildrenSchedule } from './api-actions';

const initialState: ParentData = {
  schedule: [],
};

export const parentData = createSlice({
  name: Namespace.Parent,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchChildrenSchedule.fulfilled, (state, action) => {
      state.schedule = action.payload;
    });
  },
});
