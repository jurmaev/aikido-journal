import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ChildrenData } from '../../types/state';
import { createChild, getChildren } from './api-actions';

const initialState: ChildrenData = {
  children: [],
};

export const childrenData = createSlice({
  name: Namespace.Children,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getChildren.fulfilled, (state, action) => {
        state.children = action.payload;
      })
      .addCase(createChild.fulfilled, (state, action) => {
        state.children.push(action.payload);
      });
  },
});
