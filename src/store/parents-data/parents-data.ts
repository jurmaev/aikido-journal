import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ParentsData } from '../../types/state';
import { getParents } from './api-actions';

const initialState: ParentsData = {
  parents: [],
};

export const parentsData = createSlice({
  name: Namespace.Parents,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getParents.fulfilled, (state, action) => {
      state.parents = action.payload;
    });
  },
});
