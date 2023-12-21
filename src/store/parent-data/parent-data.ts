import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ParentData } from '../../types/state';
import { fetchChildrenSchedule } from './api-actions';
import { getTrainingTime } from '../../utils/datetime';

const initialState: ParentData = {
  schedule: [],
};

export const parentData = createSlice({
  name: Namespace.Parent,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchChildrenSchedule.fulfilled, (state, action) => {
      state.schedule = action.payload;
      state.schedule.forEach(
        (info) =>
          (info.group_inf.schedule = info.group_inf.schedule.map((day) =>
            getTrainingTime(day)
          ))
      );
    });
  },
});
