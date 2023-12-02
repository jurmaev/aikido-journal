import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import SearchTable from '../search-table/search-table';
import { useState } from 'react';
import { produce } from 'immer';
import { Child } from '../../../types/children';
import ParentsRow from '../parents-row/parents-row';
import ParentsModal from '../parents-modal/parents-modal';
import { useAppSelector } from '../../../hooks';
import { getParents } from '../../../store/parents-data/parents-data.selectors';

export default function ParentsTable() {
  const parents = useAppSelector(getParents);
  const [errorText, setErrorText] = useState('');
  const [activeModal, setActiveModal] = useState('');
  const [highlightedValue, setHighlightedValue] = useState('');
  const sortedParents = parents.filter((parent) =>
    parent.name.toLowerCase().includes(highlightedValue)
  );
  const children = parents.map((parent) => parent.children).flat();

  // function handleSort(sortValue: string) {
  //   if (sortValue !== '') {
  //     setParentsState(
  //       parents.filter((parent) =>
  //         parent.name.toLowerCase().includes(sortValue)
  //       )
  //     );
  //     setHighlightedValue(sortValue);
  //   } else {
  //     setParentsState(parents);
  //     setHighlightedValue('');
  //   }
  // }

  function handleSelect(selectValue: { parentId: string; childId: string }) {
    if (parents.some((parent) => parent.children?.id === selectValue.childId)) {
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
                {sortedParents.map((parent) => {
                  if (parent.children.length === 0) {
                    return (
                      <ParentsRow
                        key={`${parent.id}-row`}
                        parent={parent}
                        child={null}
                        highlightedValue={highlightedValue}
                        setActiveModal={setActiveModal}
                      />
                    );
                  } else {
                    return parent.children.map((child) => (
                      <ParentsRow
                        key={`${parent.id}-${child.id}-row`}
                        parent={parent}
                        child={child}
                        highlightedValue={highlightedValue}
                        setActiveModal={setActiveModal}
                      />
                    ));
                  }
                })}
              </>
            </tbody>
          </table>
          <>
            {sortedParents.map((parent) => {
              if (parent.children.length === 0) {
                return (
                  <ParentsModal
                    key={`${parent.id}-modal`}
                    child={null}
                    children={children}
                    parent={parent}
                    errorText={errorText}
                    setErrorText={setErrorText}
                    handleSelect={handleSelect}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                  />
                );
              } else {
                return parent.children.map((child) => (
                  <ParentsModal
                    key={`${parent.id}-modal`}
                    child={child}
                    children={children}
                    parent={parent}
                    errorText={errorText}
                    setErrorText={setErrorText}
                    handleSelect={handleSelect}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                  />
                ));
              }
            })}
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
