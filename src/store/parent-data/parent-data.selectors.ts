import { Namespace } from '../../const';
import { Attendance, Profile, ScheduleInfo } from '../../types/parent';
import { State } from '../../types/state';

export const getChildrenSchedule = (state: State): ScheduleInfo[] =>
  state[Namespace.Parent].schedule;

export const getChildrenAttendance = (state: State): Attendance[] =>
  state[Namespace.Parent].attendance;

export const getProfileInfo = (state: State): Profile =>
  state[Namespace.Parent].profile;
