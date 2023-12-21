import { ChildAttendance, GroupSchedule, TrainingTime } from './group';

export type GroupInfo = {
  group_name: string;
  group_price: number;
  coach_name: string;
  coach_surname: string;
  coach_patronymic: string;
  coach_phone_number: string;
  schedule: Array<TrainingTime | null>;
};

export type ScheduleInfo = {
  name: string;
  surname: string;
  patronymic: string;
  group_inf: GroupInfo;
};

export type Attendance = {
  name: string;
  surname: string;
  patronymic: string;
  attendance: ChildAttendance;
  schedule: GroupSchedule;
};
