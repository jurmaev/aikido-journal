import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import SearchTable from '../search-table/search-table';
import { useState } from 'react';
import ParentsRow from '../parents-row/parents-row';
import ParentsModal from '../parents-modal/parents-modal';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getParents } from '../../../store/parents-data/parents-data.selectors';
import { getChildrenWithoutParent } from '../../../store/children-data/children-data.selectors';
import { setChild } from '../../../store/parents-data/api-actions';

export default function ParentsTable() {
  const dispatch = useAppDispatch();
  const parents = useAppSelector(getParents);
  const [errorText, setErrorText] = useState('');
  const [activeModal, setActiveModal] = useState('');
  const [highlightedValue, setHighlightedValue] = useState('');
  const sortedParents = parents.filter((parent) =>
    parent.name.toLowerCase().includes(highlightedValue)
  );
  const children = useAppSelector(getChildrenWithoutParent);

  function handleSelect(selectValue: { parentId: string; childId: string }) {
    if (children.some((child) => child.id === selectValue.childId)) {
      setErrorText('Этот ребенок уже закреплен за другим родителем');
    } else if (selectValue.childId !== '') {
      dispatch(
        setChild({
          parentId: selectValue.parentId,
          childId: selectValue.childId,
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
                    key={`${parent.id}-${child.id}-modal`}
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
