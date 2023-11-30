import styles from './main.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus, NavItems } from '../../const';
import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';

export default function MainPage() {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <Header navItems={NavItems.Trainer} />
      ) : (
        <Header />
      )}
      <main>
        <div className={cn(baseStyles.container, styles.mainContainer)}>
          <h1 className={styles.mainTitle}>
            Добро пожаловать в сервис «Журнал тренера»
          </h1>
          <p className={styles.mainText}>
            Здесь вы можете отслеживать и оплачивать задолженность
          </p>
          <div className={baseStyles.inputGroup}>
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
              className={cn(
                baseStyles.btn,
                baseStyles.btnRed,
                baseStyles.btnLarge
              )}
              onClick={() => navigate(AppRoutes.Register)}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
