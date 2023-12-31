import baseStyles from '../base.module.css';
import styles from './children.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import ChildrenList from '../../components/children/children-list/children-list';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchChildren } from '../../store/children-data/api-actions';

export default function ChildrenPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.title = 'Дети';
  }, []);

  useEffect(() => {
    dispatch(fetchChildren());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.childrenContainer)}>
          <h1 className={styles.childrenTitle}>Дети</h1>
          <ChildrenList />
        </div>
      </main>
    </>
  );
}
