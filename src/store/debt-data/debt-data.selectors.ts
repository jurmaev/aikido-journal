import { Namespace } from '../../const';
import { Debt } from '../../types/debt';
import { State } from '../../types/state';

export const getDebt = (state: State): Debt[] => state[Namespace.Debt].debt;
