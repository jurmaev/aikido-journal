export type GroupSchedule = Array<{ date: string; isTraining: boolean }>;

export type ChildAttendance = Array<{
  date: string;
  isTraining: boolean | null;
}>;

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
