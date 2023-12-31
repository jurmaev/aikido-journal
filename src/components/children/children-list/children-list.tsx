import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/children-page/children.module.css';
import ChildItem from '../child-item/child-item';
import SearchChildren from '../search-children/search-children';
import { getFullName } from '../../../utils/names';
import AddChild from '../add-child/add-child';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  getChildren,
  getIsFetchingChildrenData,
} from '../../../store/children-data/children-data.selectors';
import { removeChild } from '../../../store/children-data/api-actions';
import Spinner from '../../ui/spinner/spinner';

export default function ChildrenList() {
  const dispatch = useAppDispatch();
  const children = useAppSelector(getChildren);
  const [highlightedValue, setHighlightedValue] = useState('');
  const filteredChildren = children.filter((child) =>
    getFullName(child).toLowerCase().includes(highlightedValue)
  );
  const isFetchingChildrenData = useAppSelector(getIsFetchingChildrenData);

  function handleDelete(id: number) {
    dispatch(removeChild(id));
  }

  return (
    <>
      <AddChild />

      <SearchChildren setHighlightedValue={setHighlightedValue} />

      {isFetchingChildrenData ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}
