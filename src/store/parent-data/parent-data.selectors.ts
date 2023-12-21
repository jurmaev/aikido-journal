import { Namespace } from '../../const';
import { ScheduleInfo } from '../../types/parent';
import { State } from '../../types/state';

export const getChildrenSchedule = (state: State): ScheduleInfo[] =>
  state[Namespace.Parent].schedule;
