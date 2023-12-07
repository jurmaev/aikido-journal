import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ParentsData } from '../../types/state';
import { fetchParents, removeChild, setChild } from './api-actions';

const initialState: ParentsData = {
  parents: [],
};

export const parentsData = createSlice({
  name: Namespace.Parents,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchParents.fulfilled, (state, action) => {
        state.parents = action.payload;
      })
      .addCase(setChild.fulfilled, (state, action) => {
        const newParent = action.payload;
        state.parents.find((parent) => parent.id === newParent.id)!.children =
          newParent.children;
      })
      .addCase(removeChild.fulfilled, (state, action) => {
        const { parentId, childId } = action.payload;
        const parent = state.parents.find((parent) => parent.id === parentId);
        parent.children = parent?.children.filter(
          (child) => child.id !== childId
        );
      });
  },
});
