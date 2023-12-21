import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ParentData } from '../../types/state';
import { fetchChildrenAttendance, fetchChildrenSchedule } from './api-actions';
import { getTrainingTime } from '../../utils/datetime';

const initialState: ParentData = {
  schedule: [],
  attendance: [],
};

export const parentData = createSlice({
  name: Namespace.Parent,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchChildrenSchedule.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.schedule.forEach((info) => {
          if (info.group_inf) {
            info.group_inf.schedule = info.group_inf.schedule.map((day) =>
              getTrainingTime(day)
            );
          }
        });
      })
      .addCase(fetchChildrenAttendance.fulfilled, (state, action) => {
        state.attendance = action.payload;
      });
  },
});
