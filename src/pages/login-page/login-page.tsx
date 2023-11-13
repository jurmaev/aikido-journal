import styles from '../base.module.css';
export default function LoginPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <a href="#">
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className={styles.logo}
            />
          </a>
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
            <h1 className={styles.formTitle}>Вход</h1>
            <label htmlFor="number" className={styles.formLabel}>
              Введите номер телефона
            </label>
            <input
              type="tel"
              className={styles.formInput}
              id="number"
              placeholder="+7 (___) ___-__-__"
            />
            <label htmlFor="password" className={styles.formLabel}>
              Введите пароль
            </label>
            <input
              type="password"
              className={styles.formInput}
              id="password"
              placeholder="**********"
            />
            <button
              className={`${styles.btn} ${styles.btnBlue} ${styles.btnLarge}`}
            >
              Войти
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
