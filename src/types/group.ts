import { Child, Children } from './children';

export type ScheduleDay = { date: string; is_training: boolean | null };

export type GroupSchedule = ScheduleDay[];

export type TrainingTime = {
  start: string;
  end: string;
};

export type ChildAttendance = Child & {
  attendance: Array<{
    date: string;
    is_training: boolean | null;
  }>;
};

export type Group = {
  name: string;
  price: number;
  children: Children;
  days: Array<TrainingTime | null>;
};

export type Groups = Group[];

export type GroupAttendance = {
  group_name: string;
  schedule: GroupSchedule;
  children_attendance: ChildAttendance[];
};
