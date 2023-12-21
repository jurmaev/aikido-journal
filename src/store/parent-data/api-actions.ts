import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Attendance, ScheduleInfo } from '../../types/parent';
import { ApiRoute } from '../../const';

export const fetchChildrenSchedule = createAsyncThunk<
  ScheduleInfo[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('parents/fetchChildrenSchedule', async (_arg, { extra: api }) => {
  const { data } = await api.get<ScheduleInfo[]>(
    `${ApiRoute.Parents}/get_children_schedule`
  );
  return data;
});

export const fetchChildrenAttendance = createAsyncThunk<
  Attendance[],
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('parents/fetchChildrenAttendance', async (startDate, { extra: api }) => {
  const { data } = await api.get<Attendance[]>(
    `${ApiRoute.Parents}/get_children_attendance/${startDate}`
  );
  return data;
});
