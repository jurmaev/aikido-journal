import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import ChildrenPage from '../../pages/children-page/children-page';
import ParentsPage from '../../pages/parents-page/parents-page';
import GroupsPage from '../../pages/groups-page/groups-page';
import AttendancePage from '../../pages/attendance-page/attendance-page';
import PaymentPage from '../../pages/payment-page/payment-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainPage />} />
          <Route path={AppRoutes.Login} element={<LoginPage />} />
          <Route path={AppRoutes.Register} element={<RegisterPage />} />
          <Route path={AppRoutes.Children} element={<ChildrenPage />} />
          <Route path={AppRoutes.Parents} element={<ParentsPage />} />
          <Route path={AppRoutes.Groups} element={<GroupsPage />} />
          <Route path={AppRoutes.Attendance} element={<AttendancePage />} />
          <Route path={AppRoutes.Payment} element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
