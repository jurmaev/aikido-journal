import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import SearchTable from '../search-table/search-table';
import { useState } from 'react';
import { parents } from '../../../mocks/parents';
import { produce } from 'immer';
import { children } from '../../../mocks/children';
import { Child } from '../../../types/children';
import ParentsRow from '../parents-row/parents-row';
import ParentsModal from '../parents-modal/parents-modal';

export default function ParentsTable() {
  const [parentsState, setParentsState] = useState(parents);
  const [errorText, setErrorText] = useState('');
  const [activeModal, setActiveModal] = useState('');
  const [highlightedValue, setHighlightedValue] = useState('');

  function handleSort(sortValue: string) {
    if (sortValue !== '') {
      setParentsState(
        parents.filter((parent) =>
          parent.name.toLowerCase().includes(sortValue)
        )
      );
      setHighlightedValue(sortValue);
    } else {
      setParentsState(parents);
      setHighlightedValue('');
    }
  }

  function handleSelect(selectValue: { parentId: string; childId: string }) {
    if (
      parentsState.some((parent) => parent.child?.id === selectValue.childId)
    ) {
      setErrorText('Этот ребенок уже закреплен за другим родителем');
    } else if (selectValue.childId !== '') {
      setParentsState(
        produce((draft) => {
          const parent = draft.find(
            (parent) => parent.id === selectValue.parentId
          )!;

          const child = children.find(
            (child) => child.id === selectValue.childId
          ) as Child;

          parent.child = child;
        })
      );
      setActiveModal('');
      setErrorText('');
    }
  }

  return (
    <>
      <SearchTable handleSort={handleSort} />

      {parentsState.length !== 0 ? (
        <>
          <table className={styles.parentsTable}>
            <thead>
              <tr>
                <th className={styles.parentsData}>Родитель</th>
                <th className={styles.parentsData}>Ребёнок</th>
              </tr>
            </thead>
            <tbody>
              {parentsState.map((parent) => (
                <ParentsRow
                  key={`${parent.id}-row`}
                  parent={parent}
                  highlightedValue={highlightedValue}
                  setActiveModal={setActiveModal}
                />
              ))}
            </tbody>
          </table>
          <>
            {parentsState.map((parent) => (
              <ParentsModal
                key={`${parent.id}-modal`}
                parent={parent}
                errorText={errorText}
                setErrorText={setErrorText}
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
