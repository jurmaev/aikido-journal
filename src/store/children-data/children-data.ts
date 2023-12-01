import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ChildrenData } from '../../types/state';
import { createChild, getChildren, removeChild } from './api-actions';

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
      })
      .addCase(removeChild.fulfilled, (state, action) => {
        state.children = state.children.filter(
          (child) => child.id !== action.payload
        );
      });
  },
});
