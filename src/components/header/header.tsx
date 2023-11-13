import { Link, useNavigate } from 'react-router-dom';
import styles from '../../pages/base.module.css';
import { AppRoutes } from '../../const';
import { ReactNode } from 'react';
import logoSrc from './logo.svg';

type HeaderProps = {
  children?: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <Link to={AppRoutes.Main}>
          <img
            src={logoSrc}
            alt="Aikido journal logo"
            className={styles.logo}
          />
        </Link>
        {children}
        <button
          className={`${styles.btn} ${styles.btnBlue} ${styles.headerBtn}`}
          onClick={() => navigate(AppRoutes.Login)}
        >
          Войти
        </button>
      </div>
    </header>
  );
}
