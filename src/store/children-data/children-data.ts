import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ChildrenData } from '../../types/state';
import {
  createChild,
  fetchChildren,
  fetchChildrenWithoutParentApi,
  removeChild,
} from './api-actions';

const initialState: ChildrenData = {
  children: [],
  childrenWithoutParent: [],
  isFetchingChildrenData: false,
};

export const childrenData = createSlice({
  name: Namespace.Children,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchChildren.pending, (state) => {
        state.isFetchingChildrenData = true;
      })
      .addCase(fetchChildren.fulfilled, (state, action) => {
        state.children = action.payload;
        state.isFetchingChildrenData = false;
      })
      .addCase(createChild.fulfilled, (state, action) => {
        state.children.push(action.payload);
      })
      .addCase(removeChild.fulfilled, (state, action) => {
        state.children = state.children.filter(
          (child) => child.id !== action.payload
        );
      })
      .addCase(fetchChildrenWithoutParentApi.fulfilled, (state, action) => {
        state.childrenWithoutParent = action.payload;
      });
  },
});
