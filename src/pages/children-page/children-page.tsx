import baseStyles from '../base.module.css';
import styles from './children.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import { useState } from 'react';
import { children } from '../../mocks/children';
import cn from 'classnames';
import { getFullName } from '../../utils/names';
import ChildItem from '../../components/children/child/child';
import AddChild from '../../components/children/add-child/add-child';
import SearchChildren from '../../components/children/search-children/search-children';

export default function ChildrenPage() {
  const [childrenState, setChildrenState] = useState(children);
  const [highlightedValue, setHighlightedValue] = useState('');

  function handleAddChild(surname: string, name: string, patronymic: string) {
    setChildrenState(
      childrenState.concat({
        id: crypto.randomUUID(),
        name: name,
        surname: surname,
        patronymic: patronymic ? patronymic : '',
      })
    );
  }

  function handleDelete(id: string) {
    setChildrenState(childrenState.filter((child) => child.id !== id));
  }

  function handleSortChildren(sortValue: string) {
    if (sortValue !== '') {
      setChildrenState(
        children.filter((child) =>
          getFullName(child).toLowerCase().includes(sortValue.trim())
        )
      );
    } else {
      setChildrenState(children);
    }
  }

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.childrenContainer)}>
          <h1 className={styles.childrenTitle}>Дети</h1>

          <AddChild onAddChild={handleAddChild} />

          <SearchChildren
            onSort={handleSortChildren}
            setHighlightedValue={setHighlightedValue}
          />

          <ul className={styles.childrenList}>
            {childrenState.length !== 0 ? (
              childrenState.map((child) => (
                <ChildItem
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
        </div>
      </main>
    </>
  );
}
