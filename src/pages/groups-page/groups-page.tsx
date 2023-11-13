import { Link, NavLink } from 'react-router-dom';
import baseStyles from '../base.module.css';
import styles from './groups.module.css';
import { AppRoutes } from '../../const';
export default function GroupsPage() {
  return (
    <>
      <header className={baseStyles.header}>
        <div
          className={`${baseStyles.container} ${baseStyles.headerContainer}`}
        >
          <Link to={AppRoutes.Main}>
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className={baseStyles.logo}
            />
          </Link>
          <nav className={baseStyles.nav}>
            <ul className={baseStyles.navList}>
              <li className={baseStyles.navItem}>
                <NavLink to={AppRoutes.Children}>Дети</NavLink>
              </li>
              <li className={baseStyles.navItem}>
                <NavLink to={AppRoutes.Parents}>Родители</NavLink>
              </li>
              <li className={baseStyles.navItem}>
                <NavLink to={AppRoutes.Groups}>Группы</NavLink>
              </li>
              <li className={baseStyles.navItem}>
                <NavLink to={AppRoutes.Attendance}>Посещаемость</NavLink>
              </li>
              <li className={baseStyles.navItem}>
                <NavLink to={AppRoutes.Payment}>Задолженность</NavLink>
              </li>
            </ul>
          </nav>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.headerBtn}`}
          >
            Войти
          </button>
        </div>
      </header>
      <main>
        <div className={`${baseStyles.container} ${styles.groupsContainer}`}>
          <h1 className={styles.groupsTitle}>Группы</h1>
          <label htmlFor="group" className={styles.groupsLabel}>
            Создать группу
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.groupsInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.groupsInput}`}
              id="group"
              placeholder="Придумайте название группы"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            >
              Создать
            </button>
          </div>
          <label htmlFor="list" className={styles.groupsLabel}>
            Список групп
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.groupsInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.groupsInput}`}
              id="list"
              placeholder="Введите название группы"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.groupsList}>
            <li className={styles.groupsItem}>
              <span>Группа 1</span>
              <button
                className={`${baseStyles.btn} ${styles.groupsBtn}`}
                aria-label="Edit group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9404 20.0002H20.8062"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.254 3.50023C16.6459 3.1024 17.1774 2.87891 17.7316 2.87891C18.006 2.87891 18.2778 2.93378 18.5313 3.04038C18.7848 3.14699 19.0152 3.30324 19.2092 3.50023C19.4033 3.69721 19.5572 3.93106 19.6622 4.18843C19.7672 4.4458 19.8213 4.72165 19.8213 5.00023C19.8213 5.2788 19.7672 5.55465 19.6622 5.81202C19.5572 6.06939 19.4033 6.30324 19.2092 6.50023L6.89567 19.0002L2.95532 20.0002L3.94041 16.0002L16.254 3.50023Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className={styles.groupsItem}>
              <span>Группа 2</span>
              <button
                className={`${baseStyles.btn} ${styles.groupsBtn}`}
                aria-label="Edit group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9404 20.0002H20.8062"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.254 3.50023C16.6459 3.1024 17.1774 2.87891 17.7316 2.87891C18.006 2.87891 18.2778 2.93378 18.5313 3.04038C18.7848 3.14699 19.0152 3.30324 19.2092 3.50023C19.4033 3.69721 19.5572 3.93106 19.6622 4.18843C19.7672 4.4458 19.8213 4.72165 19.8213 5.00023C19.8213 5.2788 19.7672 5.55465 19.6622 5.81202C19.5572 6.06939 19.4033 6.30324 19.2092 6.50023L6.89567 19.0002L2.95532 20.0002L3.94041 16.0002L16.254 3.50023Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className={styles.groupsItem}>
              <span>Группа 3</span>
              <button
                className={`${baseStyles.btn} ${styles.groupsBtn}`}
                aria-label="Edit group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9404 20.0002H20.8062"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.254 3.50023C16.6459 3.1024 17.1774 2.87891 17.7316 2.87891C18.006 2.87891 18.2778 2.93378 18.5313 3.04038C18.7848 3.14699 19.0152 3.30324 19.2092 3.50023C19.4033 3.69721 19.5572 3.93106 19.6622 4.18843C19.7672 4.4458 19.8213 4.72165 19.8213 5.00023C19.8213 5.2788 19.7672 5.55465 19.6622 5.81202C19.5572 6.06939 19.4033 6.30324 19.2092 6.50023L6.89567 19.0002L2.95532 20.0002L3.94041 16.0002L16.254 3.50023Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
