import { Children } from './children';

export type ScheduleDay = { date: string; isTraining: boolean };

export type GroupSchedule = ScheduleDay[];

export type TrainingTime = {
  start: string;
  end: string;
};

export type ChildAttendance = Array<{
  date: string;
  isTraining: boolean | null;
}>;

export type Group = {
  name: string;
  price: number | string;
  children: Children;
  days: Array<TrainingTime | null>;
};

export type Groups = Group[];

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
