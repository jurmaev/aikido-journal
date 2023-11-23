import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import { useState } from 'react';

type SearchTableProps = {
  handleSort: (sortValue: string) => void;
};

export default function SearchTable({ handleSort }: SearchTableProps) {
  const [sortValue, setSortValue] = useState('');

  return (
    <>
      <label htmlFor="search" className={styles.parentsLabel}>
        Список (Родитель/Ребёнок)
      </label>
      <div className={cn(baseStyles.inputGroup, styles.parentsInputGroup)}>
        <input
          type="text"
          className={cn(baseStyles.formInput, styles.formInput)}
          id="search"
          placeholder="Введите ФИО родителя"
          value={sortValue}
          onChange={(evt) => setSortValue(evt.target.value)}
        />
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={() => handleSort(sortValue.trim())}
        >
          Поиск
        </button>
      </div>
    </>
  );
}
