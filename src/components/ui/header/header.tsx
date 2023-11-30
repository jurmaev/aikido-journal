import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from '../../../pages/base.module.css';
import { AppRoutes, AuthorizationStatus } from '../../../const';
import logoSrc from './logo.svg';
import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-data/user-data.selectors';
import { logout } from '../../../store/user-data/user-data';

type HeaderProps = {
  navItems?: Array<{ name: string; link: string }>;
};

export default function Header({ navItems }: HeaderProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isNavActive, setIsNavActive] = useState(false);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className={styles.header}>
      <div className={cn(styles.container, styles.headerContainer)}>
        {!isNavActive && (
          <Link to={AppRoutes.Main} className={styles.logoLink}>
            <img
              src={logoSrc}
              alt="Aikido journal logo"
              className={styles.logo}
            />
          </Link>
        )}
        {navItems && (
          <nav className={cn(styles.nav, { [styles.active]: isNavActive })}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className={({ isActive }: { isActive: boolean }): string =>
                    isActive
                      ? `${styles.navItem} ${styles.navItemActive}`
                      : styles.navItem
                  }
                >
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
            <div
              className={styles.burger}
              onClick={() => setIsNavActive(!isNavActive)}
            >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            <button
              className={styles.burgerClose}
              onClick={() => setIsNavActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M19 34.8333C27.7445 34.8333 34.8334 27.7445 34.8334 19C34.8334 10.2555 27.7445 3.16666 19 3.16666C10.2555 3.16666 3.16669 10.2555 3.16669 19C3.16669 27.7445 10.2555 34.8333 19 34.8333Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.75 14.25L14.25 23.75"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.25 14.25L23.75 23.75"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        )}
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <button
            className={cn(styles.btn, styles.btnBlue, styles.headerBtn)}
            onClick={() => dispatch(logout())}
          >
            Выйти
          </button>
        ) : (
          <button
            className={cn(styles.btn, styles.btnBlue, styles.headerBtn)}
            onClick={() => navigate(AppRoutes.Login)}
          >
            Войти
          </button>
        )}
      </div>
    </header>
  );
}
