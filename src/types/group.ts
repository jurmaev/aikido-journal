import { Children } from './children';

export type ScheduleDay = { date: string; isTraining: boolean };

export type GroupSchedule = ScheduleDay[];

export type TrainingTime = {
  startTime: string;
  endTime: string;
};

export type ChildAttendance = Array<{
  date: string;
  isTraining: boolean | null;
}>;

export type Group = {
  id: string;
  name: string;
  price: number;
  children: Children;
  schedule: Array<TrainingTime | null>;
};

export type GroupAttendance = {
  id: string;
  name: string;
  schedule: GroupSchedule;
  children: {
    id: string;
    name: string;
    attendance: ChildAttendance;
  }[];
};

export type Attendance = GroupAttendance[];
