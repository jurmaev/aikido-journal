import { Namespace } from '../../const';
import { Children } from '../../types/children';
import { State } from '../../types/state';

export const getChildren = (state: State): Children =>
  state[Namespace.Children].children;

export const getChildrenWithoutParent = (state: State): Children =>
  state[Namespace.Children].childrenWithoutParent;

export const getIsFetchingChildrenData = (state: State): boolean =>
  state[Namespace.Children].isFetchingChildrenData;
