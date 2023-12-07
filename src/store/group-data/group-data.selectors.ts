import { Namespace } from '../../const';
import { Groups } from '../../types/group';
import { State } from '../../types/state';

export const getGroups = (state: State): Groups =>
  state[Namespace.Groups].groups;
