import baseStyles from '../base.module.css';
import styles from './children.module.css';
import { NavItems } from '../../const';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import ChildrenList from '../../components/children/children-list/children-list';

export default function ChildrenPage() {
  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.childrenContainer)}>
          <h1 className={styles.childrenTitle}>Дети</h1>
          <ChildrenList />
        </div>
      </main>
    </>
  );
}
