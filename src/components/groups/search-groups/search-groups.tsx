import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';

type SearchGroupsProps = {
  onSearch: (searchValue: string) => void;
};

export default function SearchGroups({ onSearch }: SearchGroupsProps) {
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
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              onSearch(searchValue);
            }
          }}
        />
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={() => onSearch(searchValue)}
        >
          Поиск
        </button>
      </div>
    </>
  );
}
