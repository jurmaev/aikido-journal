import { Namespace } from '../../const';
import { Parents } from '../../types/parents';
import { State } from '../../types/state';

export const getParents = (state: State): Parents =>
  state[Namespace.Parents].parents;
