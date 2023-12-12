import Header from '../../components/ui/header/header';
import baseStyles from '../base.module.css';
import styles from './not-found.module.css';
import cn from 'classnames';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.container)}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>Страница не найдена</p>
        </div>
      </main>
    </>
  );
}
