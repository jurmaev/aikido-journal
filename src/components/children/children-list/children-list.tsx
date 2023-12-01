import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/children-page/children.module.css';
import ChildItem from '../child-item/child-item';
import SearchChildren from '../search-children/search-children';
import { getFullName } from '../../../utils/names';
import AddChild from '../add-child/add-child';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getChildren } from '../../../store/children-data/children-data.selectors';
import { createChild } from '../../../store/children-data/api-actions';

export default function ChildrenList() {
  const dispatch = useAppDispatch();
  const children = useAppSelector(getChildren);
  const [highlightedValue, setHighlightedValue] = useState('');
  const filteredChildren = children.filter((child) =>
    getFullName(child).toLowerCase().includes(highlightedValue)
  );

  function handleDelete(id: string) {
    return null;
  }

  function handleAddChild(surname: string, name: string, patronymic?: string) {
    dispatch(
      createChild({ name: name, surname: surname, patronymic: patronymic })
    );
  }

  return (
    <>
      <AddChild onAddChild={handleAddChild} />

      <SearchChildren setHighlightedValue={setHighlightedValue} />

      <ul className={styles.childrenList}>
        {filteredChildren.length !== 0 ? (
          filteredChildren.map((child) => (
            <ChildItem
              key={child.id}
              child={child}
              handleDelete={handleDelete}
              highlightedValue={highlightedValue}
            />
          ))
        ) : (
          <p className={baseStyles.failText}>
            По вашему запросу детей не найдено
          </p>
        )}
      </ul>
    </>
  );
}
