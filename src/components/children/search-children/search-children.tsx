import { SetStateAction, useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/children-page/children.module.css';
import cn from 'classnames';

type SearchChildrenProps = {
  setHighlightedValue: React.Dispatch<SetStateAction<string>>;
};

export default function SearchChildren({
  setHighlightedValue,
}: SearchChildrenProps) {
  const [sortValue, setSortValue] = useState('');

  function handleSortClick() {
    if (sortValue.trim() !== '') {
      setSortValue(sortValue.trim());
      setHighlightedValue(sortValue.trim());
    } else {
      setSortValue('');
      setHighlightedValue('');
    }
  }

  return (
    <>
      <label htmlFor="search" className={styles.childrenLabel}>
        Список детей
      </label>
      <div className={cn(baseStyles.inputGroup, styles.childrenInputGroup)}>
        <input
          type="text"
          className={cn(baseStyles.formInput, styles.childrenInput)}
          id="search"
          placeholder="Введите ФИО ребёнка"
          value={sortValue}
          onChange={(evt) => setSortValue(evt.target.value)}
        />
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={handleSortClick}
        >
          Поиск
        </button>
      </div>
    </>
  );
}
