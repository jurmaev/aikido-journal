import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { GroupData } from '../../types/state';
import { fetchGroups } from './api-actions';
import { TrainingTime } from '../../types/group';

const initialState: GroupData = {
  groups: [],
};

export const groupData = createSlice({
  name: Namespace.Groups,
  initialState,
  reducers: {
    addEmptyGroup: (state, action: PayloadAction<string>) => {
      state.groups.push({
        name: action.payload,
        price: undefined,
        children: [],
        days: [null, null, null, null, null, null, null],
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
      state.groups.forEach(
        (group) =>
          (group.days = group.days.map((day) => {
            if (day) {
              return {
                start: `${new Date(day.start).getHours()}:${new Date(
                  day.start
                ).getMinutes()}`,
                end: `${new Date(day.end).getHours()}:${new Date(
                  day.end
                ).getMinutes()}`,
              } as TrainingTime;
            }
            return null;
          }))
      );
    });
  },
});

export const { addEmptyGroup } = groupData.actions;
