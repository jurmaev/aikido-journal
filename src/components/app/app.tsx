import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import ChildrenPage from '../../pages/children-page/children-page';
import ParentsPage from '../../pages/parents-page/parents-page';
import GroupsPage from '../../pages/groups-page/groups-page';
import AttendancePage from '../../pages/attendance-page/attendance-page';
import PaymentPage from '../../pages/payment-page/payment-page';
import ParentProfilePage from '../../pages/parent-profile-page/parent-profile-page';
import ParentSchedulePage from '../../pages/parent-schedule-page/parent-schedule-page';
import ParentAttendancePage from '../../pages/parent-attendance-page/parent-attendance-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainPage />} />
          <Route
            path={AppRoutes.Login}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.NoAuth}
                withRole={null}
                navigateTo={AppRoutes.Main}
              >
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Register}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.NoAuth}
                withRole={null}
                navigateTo={AppRoutes.Main}
              >
                <RegisterPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Children}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'coach'}
                navigateTo={AppRoutes.Main}
              >
                <ChildrenPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Parents}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'coach'}
                navigateTo={AppRoutes.Main}
              >
                <ParentsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Groups}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'coach'}
                navigateTo={AppRoutes.Main}
              >
                <GroupsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Attendance}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'coach'}
                navigateTo={AppRoutes.Main}
              >
                <AttendancePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.Payment}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'coach'}
                navigateTo={AppRoutes.Main}
              >
                <PaymentPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.ParentProfile}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'parent'}
                navigateTo={AppRoutes.Main}
              >
                <ParentProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.ParentSchedule}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'parent'}
                navigateTo={AppRoutes.Main}
              >
                <ParentSchedulePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.ParentAttendance}
            element={
              <PrivateRoute
                withAuthStatus={AuthorizationStatus.Auth}
                withRole={'parent'}
                navigateTo={AppRoutes.Main}
              >
                <ParentAttendancePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
