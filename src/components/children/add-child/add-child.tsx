import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/children-page/children.module.css';
import cn from 'classnames';
import { capitalizeWords, hasNumber, trimSpaces } from '../../../utils/names';
import { useAppDispatch } from '../../../hooks';
import { createChild } from '../../../store/children-data/api-actions';

export default function AddChild() {
  const [addInput, setAddInput] = useState('');
  const [errorText, setErrorText] = useState('');
  const dispatch = useAppDispatch();

  function handleAddClick() {
    if (hasNumber(addInput)) {
      setErrorText('ФИО не должно содержать цифр');
    } else if (
      trimSpaces(addInput).split(' ').length >= 2 &&
      trimSpaces(addInput).split(' ').length < 4
    ) {
      const [surname, name, patronymic] = capitalizeWords(
        addInput.trim()
      ).split(' ');
      dispatch(
        createChild({
          name: name,
          surname: surname,
          patronymic: patronymic ? patronymic : null,
        })
      ).then((data) => {
        if (data.meta.requestStatus === 'rejected') {
          setErrorText('Ребенок с таким ФИО уже существует');
        }
      });
      setErrorText('');
      setAddInput('');
    } else {
      setErrorText('ФИО введено некорректно');
    }
  }

  return (
    <>
      <label htmlFor="child" className={styles.childrenLabel}>
        Добавить ребёнка
      </label>
      <p className={baseStyles.formError}>{errorText}</p>
      <div className={cn(baseStyles.inputGroup, styles.childrenInputGroup)}>
        <input
          type="text"
          className={cn(baseStyles.formInput, styles.childrenInput, {
            [baseStyles.formInputError]: errorText !== '',
          })}
          id="child"
          placeholder="Введите ФИО ребёнка"
          value={addInput}
          onChange={(evt) => setAddInput(evt.target.value)}
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              handleAddClick();
            }
          }}
        />
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          onClick={handleAddClick}
        >
          Добавить ребёнка
        </button>
      </div>
    </>
  );
}
