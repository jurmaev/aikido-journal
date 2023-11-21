import { Children } from './children';

export type GroupSchedule = Array<{ date: string; isTraining: boolean }>;

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
  shchedule: {
    monday: TrainingTime;
    tuesday: TrainingTime;
    wednesday: TrainingTime;
    thursday: TrainingTime;
    friday: TrainingTime;
    saturday: TrainingTime;
    sunday: TrainingTime;
  };
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
