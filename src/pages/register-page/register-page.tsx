import styles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { register } from '../../store/user-data/api-actions';
import { UserRegister } from '../../types/user';
import {
  capitalizeWords,
  hasNumber,
  isCyryllic,
  trimSpaces,
} from '../../utils/names';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { PatternFormat } from 'react-number-format';

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    document.title = 'Регистрация';
  }, []);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (nameRef.current && phoneRef.current && passwordRef.current) {
      const fullName = nameRef.current.value;
      const phone = phoneRef.current.value;
      const password = passwordRef.current.value;

      let isValidName = true;
      let isValidPassword = true;
      let isValidPhone = true;

      if (hasNumber(fullName)) {
        setNameError('ФИО не должно содержать цифр');
        isValidName = false;
      } else if (!isCyryllic(fullName)) {
        setNameError('ФИО должно содержать только кириллицу');
        isValidName = false;
      } else if (
        trimSpaces(fullName).split(' ').length < 2 ||
        trimSpaces(fullName).split(' ').length > 3
      ) {
        setNameError('ФИО введено некорректно');
        isValidName = false;
      } else {
        setNameError('');
        isValidName = true;
      }

      if (phone.includes('_')) {
        setPhoneError('Введите номер телефона полностью');
        isValidPhone = false;
      } else {
        setPhoneError('');
        isValidPhone = true;
      }

      if (password.length < 5) {
        setPasswordError('Длина пароля должна быть не менее 5 символов');
        isValidPassword = false;
      } else {
        setPasswordError('');
        isValidPassword = true;
      }

      if (isValidName && isValidPassword && isValidPhone) {
        const [surname, name, patronymic] = capitalizeWords(
          trimSpaces(fullName)
        ).split(' ');
        const userData: UserRegister = {
          phone_number: phone,
          surname: surname,
          name: name,
          patronymic: patronymic,
          password: password,
          role: 'parent',
        };
        dispatch(register(userData)).then((data) => {
          if (data.meta.requestStatus === 'fulfilled') {
            navigate(AppRoutes.Main);
          } else if (data.meta.requestStatus === 'rejected') {
            isValidPhone = false;
            setPhoneError(
              'Пользователь с таким номером телефона уже существует'
            );
          }
        });
      }
    }
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Регистрация</h1>

            <label htmlFor="name" className={styles.formLabel}>
              Введите ваше ФИО
            </label>
            <p className={styles.formError}>{nameError}</p>
            <input
              type="text"
              className={cn(styles.formInput, {
                [styles.formInputError]: nameError !== '',
              })}
              id="name"
              placeholder="Иванова Елизавета Петровна"
              autoComplete="name"
              ref={nameRef}
            />

            <label htmlFor="number" className={styles.formLabel}>
              Введите номер телефона
            </label>
            <p className={styles.formError}>{phoneError}</p>
            <PatternFormat
              format="+7 (###) ###-##-##"
              allowEmptyFormatting
              mask="_"
              getInputRef={phoneRef}
              id="number"
              className={cn(styles.formInput, {
                [styles.formInputError]: phoneError !== '',
              })}
            />

            <label htmlFor="password" className={styles.formLabel}>
              Придумайте пароль
            </label>
            <p className={styles.formError}>{passwordError}</p>
            <input
              type="password"
              className={cn(styles.formInput, {
                [styles.formInputError]: passwordError !== '',
              })}
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
