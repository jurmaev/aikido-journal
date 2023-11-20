import styles from '../base.module.css';
import Header from '../../components/header/header';
import cn from 'classnames';

export default function LoginPage() {
  return (
    <>
      <Header />
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
            <button className={cn(styles.btn, styles.btnBlue, styles.btnLarge)}>
              Войти
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
