import baseStyles from '../base.module.css';
import styles from './groups.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import GroupList from '../../components/groups/group-list/group-list';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import {
  fetchChildrenWithoutGroup,
  fetchGroups,
} from '../../store/group-data/api-actions';

export default function GroupsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
    dispatch(fetchChildrenWithoutGroup());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.groupsContainer)}>
          <h1 className={styles.groupsTitle}>Группы</h1>

          <GroupList />
        </div>
      </main>
    </>
  );
}
