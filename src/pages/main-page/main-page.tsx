import styles from './main.module.css';
import baseStyles from '../base.module.css';
export default function MainPage() {
  return (
    <>
      <header className={baseStyles.header}>
        <div
          className={`${baseStyles.container} ${baseStyles.headerContainer}`}
        >
          <a href="#">
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className={baseStyles.logo}
            />
          </a>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.headerBtn}`}
          >
            Войти
          </button>
        </div>
      </header>
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
            >
              Войти
            </button>
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
