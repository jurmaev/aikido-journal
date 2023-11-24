import baseStyles from '../base.module.css';
import styles from './groups.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';
import GroupList from '../../components/groups/group-list/group-list';

export default function GroupsPage() {
  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.groupsContainer)}>
          <h1 className={styles.groupsTitle}>Группы</h1>

          <GroupList />
        </div>
      </main>
    </>
  );
}
