import styles from './main.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';
import cn from 'classnames';

export default function MainPage() {
  const navigate = useNavigate();
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
