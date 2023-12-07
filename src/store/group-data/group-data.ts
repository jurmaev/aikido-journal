import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { GroupData } from '../../types/state';
import { fetchGroups } from './api-actions';

const initialState: GroupData = {
  groups: [],
};

export const groupData = createSlice({
  name: Namespace.Groups,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
  },
});
