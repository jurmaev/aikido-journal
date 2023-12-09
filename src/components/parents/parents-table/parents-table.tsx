import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import SearchTable from '../search-table/search-table';
import { useState } from 'react';
import ParentsRow from '../parents-row/parents-row';
import ParentsModal from '../parents-modal/parents-modal';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getParents } from '../../../store/parents-data/parents-data.selectors';
import { setChild } from '../../../store/parents-data/api-actions';
import { getFullName } from '../../../utils/names';

export default function ParentsTable() {
  const dispatch = useAppDispatch();
  const parents = useAppSelector(getParents);
  const [activeModal, setActiveModal] = useState('');
  const [highlightedValue, setHighlightedValue] = useState('');
  const sortedParents = parents.filter((parent) =>
    getFullName(parent).toLowerCase().includes(highlightedValue)
  );

  function handleSelect(parentId: string, childId: number) {
    dispatch(
      setChild({
        parentId: parentId,
        childId: childId,
      })
    );
    setActiveModal('');
  }

  return (
    <>
      <SearchTable onSort={setHighlightedValue} />

      {sortedParents.length !== 0 ? (
        <>
          <table className={styles.parentsTable}>
            <thead>
              <tr>
                <th className={styles.parentsData}>Родитель</th>
                <th className={styles.parentsData}>Ребёнок</th>
              </tr>
            </thead>
            <tbody>
              <>
                {sortedParents.map((parent) => (
                  <ParentsRow
                    key={`${parent.id}}-row`}
                    parent={parent}
                    children={parent.children}
                    highlightedValue={highlightedValue}
                    setActiveModal={setActiveModal}
                  />
                ))}
              </>
            </tbody>
          </table>
          <>
            {sortedParents.map((parent) => (
              <ParentsModal
                key={`${parent.id}-modal`}
                children={parent.children}
                parent={parent}
                handleSelect={handleSelect}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
              />
            ))}
          </>
        </>
      ) : (
        <p className={baseStyles.failText}>
          По вашему запросу ничего не найдено
        </p>
      )}
    </>
  );
}
