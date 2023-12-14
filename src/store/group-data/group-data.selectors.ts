import { Namespace } from '../../const';
import { Children } from '../../types/children';
import { Group, Groups } from '../../types/group';
import { State } from '../../types/state';

export const getGroups = (state: State): Groups =>
  state[Namespace.Groups].groups;

export const getNewGroup = (state: State): Group | null =>
  state[Namespace.Groups].newGroup;

export const getChildrenWithoutGroup = (state: State): Children =>
  state[Namespace.Groups].childrenWithoutGroup;

export const getIsFetchingGroupData = (state: State): boolean =>
  state[Namespace.Groups].isFetchingGroupData;
