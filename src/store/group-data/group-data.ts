import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { GroupData } from '../../types/state';
import {
  addChild,
  createGroup,
  fetchAttendance,
  fetchChildrenWithoutGroup,
  fetchGroups,
  removeChild,
  removeGroup,
  setAttendance,
  setGroupParameters,
} from './api-actions';
import { getTrainingTime } from '../../utils/datetime';

const initialState: GroupData = {
  groups: [],
  newGroup: null,
  childrenWithoutGroup: [],
  isFetchingGroupData: true,
  attendance: null,
};

export const groupData = createSlice({
  name: Namespace.Groups,
  initialState,
  reducers: {
    addNewGroup: (state, action: PayloadAction<string>) => {
      state.newGroup = {
        name: action.payload,
        price: '',
        children: [],
        days: [null, null, null, null, null, null, null],
      };
    },
    removeNewGroup: (state) => {
      state.newGroup = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.isFetchingGroupData = true;
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.groups = action.payload;
        state.groups.forEach(
          (group) =>
            (group.days = group.days.map((day) => getTrainingTime(day)))
        );
        state.isFetchingGroupData = false;
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        const createdGroup = action.payload;
        createdGroup.days = createdGroup.days.map((day) =>
          getTrainingTime(day)
        );
        state.groups.push(createdGroup);
      })
      .addCase(removeGroup.fulfilled, (state, action) => {
        state.groups = state.groups.filter(
          (group) => group.name !== action.payload
        );
      })
      .addCase(fetchChildrenWithoutGroup.fulfilled, (state, action) => {
        state.childrenWithoutGroup = action.payload;
      })
      .addCase(removeChild.fulfilled, (state, action) => {
        const removedChild = action.payload;
        const group = state.groups.find(
          (group) => group.name === removedChild.group_name_id
        )!;
        group.children = group?.children.filter(
          (child) => child.id !== removedChild.id
        );
        state.childrenWithoutGroup.push(removedChild);
      })
      .addCase(addChild.fulfilled, (state, action) => {
        const newChild = action.payload;
        state.childrenWithoutGroup = state.childrenWithoutGroup.filter(
          (child) => child.id !== newChild.id
        );
        const group = state.groups.find(
          (group) => group.name === newChild.group_name_id
        );
        group?.children.push(newChild);
      })
      .addCase(setGroupParameters.fulfilled, (state, action) => {
        const { name, newGroup } = action.payload;
        newGroup.days = newGroup.days.map((day) => getTrainingTime(day));
        state.groups = state.groups.filter((group) => group.name !== name);
        state.groups.push(newGroup);
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.attendance = action.payload;
      })
      .addCase(setAttendance.fulfilled, (state, action) => {
        state.attendance = action.payload;
      });
  },
});

export const { addNewGroup, removeNewGroup } = groupData.actions;
