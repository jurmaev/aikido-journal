import { Navigate } from 'react-router-dom';
import { AuthorizationStatusValues } from '../../const';
import { useAppSelector } from '../../hooks';
import {
  getAuthorizationStatus,
  getUserRole,
} from '../../store/user-data/user-data.selectors';
import { UserRole } from '../../types/state';

type PrivateRouteProps = {
  children: JSX.Element;
  withAuthStatus: AuthorizationStatusValues;
  withRole: UserRole | null;
  navigateTo: string;
};

export default function PrivateRoute(props: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const role = useAppSelector(getUserRole);

  return authorizationStatus === props.withAuthStatus &&
    role === props.withRole ? (
    props.children
  ) : (
    <Navigate to={props.navigateTo} />
  );
}
