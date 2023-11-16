import styles from './main.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';
export default function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <div className={`${baseStyles.container} ${styles.mainContainer}`}>
          <h1 className={styles.mainTitle}>
            Добро пожаловать в сервис «Журнал тренера»
          </h1>
          <p className={styles.mainText}>
            Здесь вы можете отслеживать и оплачивать задолженность
          </p>
          <div className={baseStyles.inputGroup}>
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
              onClick={() => navigate(AppRoutes.Login)}
            >
              Войти
            </button>
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
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
