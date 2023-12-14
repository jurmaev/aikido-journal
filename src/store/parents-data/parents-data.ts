import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ParentsData } from '../../types/state';
import { fetchParents, removeChild, setChild } from './api-actions';

const initialState: ParentsData = {
  parents: [],
  isFetchingParentsData: true,
};

export const parentsData = createSlice({
  name: Namespace.Parents,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchParents.pending, (state) => {
        state.isFetchingParentsData = true;
      })
      .addCase(fetchParents.fulfilled, (state, action) => {
        state.parents = action.payload;
        state.isFetchingParentsData = false;
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
