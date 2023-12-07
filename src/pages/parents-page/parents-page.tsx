import styles from './parents.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import { NavItems } from '../../const';
import cn from 'classnames';
import ParentsTable from '../../components/parents/parents-table/parents-table';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchParents } from '../../store/parents-data/api-actions';
import { fetchChildrenWithoutParentApi } from '../../store/children-data/api-actions';

export default function ParentsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchParents());
    dispatch(fetchChildrenWithoutParentApi());
  }, [dispatch]);

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.parentsContainer)}>
          <h1 className={styles.parentsHeader}>Родители</h1>

          <ParentsTable />
        </div>
      </main>
    </>
  );
}
