import { Namespace } from '../../const';
import { Group, Groups } from '../../types/group';
import { State } from '../../types/state';

export const getGroups = (state: State): Groups =>
  state[Namespace.Groups].groups;

export const getNewGroup = (state: State): Group | null =>
  state[Namespace.Groups].newGroup;
