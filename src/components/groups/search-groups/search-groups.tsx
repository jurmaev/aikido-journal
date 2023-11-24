import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';

export default function SearchGroups() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <label htmlFor="list" className={styles.groupsLabel}>
        Список групп
      </label>
      <div className={cn(baseStyles.inputGroup, styles.groupsInputGroup)}>
        <input
          type="text"
          className={cn(baseStyles.formInput, styles.groupsInput)}
          id="list"
          placeholder="Введите название группы"
          onChange={(evt) => setSearchValue(evt.target.value)}
        />
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
        >
          Поиск
        </button>
      </div>
    </>
  );
}
