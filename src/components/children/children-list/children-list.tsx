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
  const [childrenState, setChildrenState] = useState(children);
  const [highlightedValue, setHighlightedValue] = useState('');

  function handleDelete(id: string) {
    setChildrenState(childrenState.filter((child) => child.id !== id));
  }

  function handleSortChildren(sortValue: string) {
    if (sortValue !== '') {
      setChildrenState(
        children.filter((child) =>
          getFullName(child).toLowerCase().includes(sortValue)
        )
      );
    } else {
      setChildrenState(children);
    }
  }

  function handleAddChild(surname: string, name: string, patronymic?: string) {
    dispatch(
      createChild({ name: name, surname: surname, patronymic: patronymic })
    );
  }

  return (
    <>
      <AddChild onAddChild={handleAddChild} />

      <SearchChildren
        onSort={handleSortChildren}
        setHighlightedValue={setHighlightedValue}
      />

      <ul className={styles.childrenList}>
        {childrenState.length !== 0 ? (
          childrenState.map((child) => (
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
