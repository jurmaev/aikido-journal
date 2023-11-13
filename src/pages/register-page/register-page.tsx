import { Link } from 'react-router-dom';
import styles from '../base.module.css';
import { AppRoutes } from '../../const';

export default function RegisterPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <Link to={AppRoutes.Main}>
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className={styles.logo}
            />
          </Link>
          <button
            className={`${styles.btn} ${styles.btnBlue} ${styles.headerBtn}`}
          >
            Войти
          </button>
        </div>
      </header>
      <main>
        <form>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Регистрация</h1>
            <label htmlFor="number" className={styles.formLabel}>
              Введите ваше ФИО
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="name"
              placeholder="Иванова Елизавета Петровна"
            />
            <label htmlFor="name" className={styles.formLabel}>
              Введите номер телефона
            </label>
            <input
              type="tel"
              className={styles.formInput}
              id="number"
              placeholder="+7 (___) ___-__-__"
            />
            <label htmlFor="password" className={styles.formLabel}>
              Придумайте пароль
            </label>
            <input
              type="password"
              className={styles.formInput}
              id="password"
              placeholder="**********"
            />
            <button
              className={`${styles.btn} ${styles.btnRed} ${styles.btnLarge}`}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
