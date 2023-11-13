import { NavLink } from 'react-router-dom';
import baseStyles from '../base.module.css';
import styles from './parent-attendance.module.css';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';

export default function ParentAttendancePage() {
  return (
    <>
      <Header>
        <nav className={`${baseStyles.nav} ${styles.nav}`}>
          <ul className={baseStyles.navList}>
            <li className={baseStyles.navItem}>
              <NavLink to={AppRoutes.ParentProfile}>Профиль</NavLink>
            </li>
            <li className={baseStyles.navItem}>
              <NavLink to={AppRoutes.ParentSchedule}>Расписание</NavLink>
            </li>
            <li className={baseStyles.navItem}>
              <NavLink to={AppRoutes.ParentAttendance}>Посещаемость</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <div
          className={`${baseStyles.container} ${styles.parentAttendanceContainer}`}
        >
          <h1 className={styles.parentAttendanceTitle}>Посещаемость</h1>
          <div
            className={`${baseStyles.inputGroup} ${styles.parentAttendanceInputGroup}`}
          >
            <select
              name="month"
              id="month"
              className={styles.parentAttendanceSelect}
              aria-label="Month select"
            >
              <option value="">Выберите месяц</option>
            </select>
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Применить
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>
                  <div className={styles.tableHeaderContainer}>
                    ФИО ребенка:
                    <button
                      className={styles.tableArrow}
                      aria-label="Previos week"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="19"
                        viewBox="0 0 10 19"
                        fill="none"
                      >
                        <path
                          d="M9.5 1L1 9.5L9.5 18"
                          stroke="black"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button
                      className={styles.tableArrow}
                      aria-label="Next week"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="19"
                        viewBox="0 0 11 19"
                        fill="none"
                      >
                        <path
                          d="M1 18L9.5 9.5L1 1"
                          stroke="black"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                <th className={styles.tableHeader}>
                  <div>06.11</div>
                  <div>пн</div>
                </th>
                <th
                  className={`${styles.tableHeader} ${styles.tableHeaderInactive}`}
                >
                  <div>07.11</div>
                  <div>вт</div>
                </th>
                <th className={styles.tableHeader}>
                  <div>08.11</div>
                  <div>ср</div>
                </th>
                <th
                  className={`${styles.tableHeader} ${styles.tableHeaderInactive}`}
                >
                  <div>09.11</div>
                  <div>чт</div>
                </th>
                <th className={styles.tableHeader}>
                  <div>10.11</div>
                  <div>пт</div>
                </th>
                <th
                  className={`${styles.tableHeader} ${styles.tableHeaderInactive}`}
                >
                  <div>11.11</div>
                  <div>сб</div>
                </th>
                <th
                  className={`${styles.tableHeader} ${styles.tableHeaderInactive}`}
                >
                  <div>12.11</div>
                  <div>вс</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tableCell}>Абрамов Пётр Иванович</td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div
                      className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15 4.5L6.75 12.75L3 9"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div
                      className={`${styles.tableCheck} ${styles.tableCheckDisabled}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15 4.5L6.75 12.75L3 9"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableCross}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M18.6666 9.3335L9.33325 18.6668"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33325 9.3335L18.6666 18.6668"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div
                      className={`${styles.tableCheck} ${styles.tableCheckDisabled}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15 4.5L6.75 12.75L3 9"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div
                      className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15 4.5L6.75 12.75L3 9"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div
                      className={`${styles.tableCheck} ${styles.tableCheckDisabled}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15 4.5L6.75 12.75L3 9"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div
                      className={`${styles.tableCheck} ${styles.tableCheckDisabled}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M15 4.5L6.75 12.75L3 9"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
