import styles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { register } from '../../store/user-data/api-actions';
import { UserRegister } from '../../types/user';
import { trimSpaces } from '../../utils/names';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (nameRef.current && phoneRef.current && passwordRef.current) {
      const [surname, name, patronymic] = trimSpaces(
        nameRef.current?.value
      ).split(' ');
      const userData: UserRegister = {
        phone_number: phoneRef.current?.value,
        surname: surname,
        name: name,
        patronymic: patronymic,
        password: passwordRef.current?.value,
        role: 'parent',
      };
      dispatch(register(userData)).then((data) => {
        if (data.meta.requestStatus === 'fulfilled') {
          navigate(AppRoutes.Main);
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
            <h1 className={styles.formTitle}>Регистрация</h1>
            <label htmlFor="number" className={styles.formLabel}>
              Введите ваше ФИО
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="name"
              placeholder="Иванова Елизавета Петровна"
              ref={nameRef}
            />
            <label htmlFor="name" className={styles.formLabel}>
              Введите номер телефона
            </label>
            <input
              type="tel"
              className={styles.formInput}
              id="number"
              placeholder="+7 (___) ___-__-__"
              ref={phoneRef}
            />
            <label htmlFor="password" className={styles.formLabel}>
              Придумайте пароль
            </label>
            <input
              type="password"
              className={styles.formInput}
              id="password"
              placeholder="**********"
              ref={passwordRef}
            />
            <button className={cn(styles.btn, styles.btnRed, styles.btnLarge)}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
