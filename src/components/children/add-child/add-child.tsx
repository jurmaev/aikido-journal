import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/children-page/children.module.css';
import cn from 'classnames';
import { capitalizeWords } from '../../../utils/names';

type AddChildProps = {
  onAddChild: (surname: string, name: string, patronymic: string) => void;
};

export default function AddChild({ onAddChild }: AddChildProps) {
  const [addInput, setAddInput] = useState('');
  const [errorText, setErrorText] = useState('');

  function handleAddClick() {
    if (
      addInput.trim().split(' ').length >= 2 &&
      addInput.trim().split(' ').length < 4
    ) {
      const [surname, name, patronymic] = capitalizeWords(
        addInput.trim()
      ).split(' ');
      onAddChild(surname, name, patronymic);
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
          className={cn(baseStyles.formInput, styles.childrenInput)}
          id="child"
          placeholder="Введите ФИО ребёнка"
          value={addInput}
          onChange={(evt) => setAddInput(evt.target.value)}
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