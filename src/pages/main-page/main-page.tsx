import styles from './main.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getAuthorizationStatus,
  getUserRole,
} from '../../store/user-data/user-data.selectors';
import { logout } from '../../store/user-data/user-data';
import { useEffect } from 'react';

export default function MainPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const role = useAppSelector(getUserRole);

  useEffect(() => {
    document.title = 'Главная';
  }, []);

  function getButtons() {
    if (authorizationStatus === AuthorizationStatus.Auth && role === 'parent') {
      return (
        <>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnRed,
              baseStyles.btnLarge
            )}
            onClick={() => navigate(AppRoutes.ParentProfile)}
          >
            Вернуться в профиль
          </button>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnBlue,
              baseStyles.btnLarge
            )}
            onClick={() => {
              dispatch(logout());
              navigate(AppRoutes.Main);
            }}
          >
            Выйти
          </button>
        </>
      );
    } else if (
      authorizationStatus === AuthorizationStatus.Auth &&
      role === 'coach'
    ) {
      return (
        <>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnRed,
              baseStyles.btnLarge
            )}
            onClick={() => navigate(AppRoutes.Attendance)}
          >
            Перейти к посещаемости
          </button>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnBlue,
              baseStyles.btnLarge
            )}
            onClick={() => {
              dispatch(logout());
              navigate(AppRoutes.Main);
            }}
          >
            Выйти
          </button>
        </>
      );
    }
    return (
      <>
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={() => navigate(AppRoutes.Login)}
        >
          Войти
        </button>
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          onClick={() => navigate(AppRoutes.Register)}
        >
          Зарегистрироваться
        </button>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.mainContainer)}>
          <h1 className={styles.mainTitle}>
            Добро пожаловать в сервис «Журнал тренера»
          </h1>
          <p className={styles.mainText}>
            Здесь вы можете отслеживать и оплачивать задолженность
          </p>
          <div className={baseStyles.inputGroup}>{getButtons()}</div>
        </div>
      </main>
    </>
  );
}
