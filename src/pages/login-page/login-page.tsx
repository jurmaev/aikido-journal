import styles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { UserLogin } from '../../types/user';
import { login } from '../../store/user-data/api-actions';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { PatternFormat } from 'react-number-format';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (phoneRef.current && passwordRef.current) {
      const user: UserLogin = {
        username: phoneRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(login(user)).then((data) => {
        if (data.meta.requestStatus === 'fulfilled') {
          navigate(AppRoutes.Main);
        } else if (data.meta.requestStatus === 'rejected') {
          setError('Неверный логин или пароль');
        }
      });
    }
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Вход</h1>
            <label htmlFor="number" className={styles.formLabel}>
              Введите номер телефона
            </label>
            <PatternFormat
              format="+7 (###) ###-##-##"
              allowEmptyFormatting
              mask="_"
              getInputRef={phoneRef}
              id="number"
              className={styles.formInput}
            />
            <label htmlFor="password" className={styles.formLabel}>
              Введите пароль
            </label>
            <input
              type="password"
              className={styles.formInput}
              id="password"
              placeholder="**********"
              ref={passwordRef}
            />
            <p className={styles.formError}>{error}</p>
            <button className={cn(styles.btn, styles.btnBlue, styles.btnLarge)}>
              Войти
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
