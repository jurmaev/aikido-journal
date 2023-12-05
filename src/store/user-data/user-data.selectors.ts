import { AuthorizationStatusValues, Namespace } from '../../const';
import { State, UserRole } from '../../types/state';

export const getAuthorizationStatus = (
  state: State
): AuthorizationStatusValues => state[Namespace.User].authorizationStatus;

export const getUserRole = (state: State): UserRole => state[Namespace.User].role;
