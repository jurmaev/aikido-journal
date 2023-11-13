import baseStyles from '../base.module.css';
import styles, { tableHeaderContainer } from './attendance.module.css';
export default function AttendancePage() {
  return (
    <>
      <header className={baseStyles.header}>
        <div
          className={`${baseStyles.container} ${baseStyles.headerContainer}`}
        >
          <a href="#">
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className={baseStyles.logo}
            />
          </a>
          <nav className={baseStyles.nav}>
            <ul className={baseStyles.navList}>
              <li className={baseStyles.navItem}>
                <a href="#">Дети</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Родители</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Группы</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Посещаемость</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Задолженность</a>
              </li>
            </ul>
          </nav>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.headerBtn}`}
            aria-label="Войти"
          >
            Войти
          </button>
        </div>
      </header>
      <main>
        <div
          className={`${baseStyles.container} ${styles.attendanceContainer}`}
        >
          <h1 className={`${styles.attendanceTitle}`}>Посещаемость</h1>
          <div
            className={`${baseStyles.inputGroup} ${styles.attendanceInputGroup}`}
          >
            <select
              name="group"
              id="group"
              className={`${baseStyles.formInput} ${styles.attendanceSelect}`}
              aria-label="Select group"
            >
              <option value="">Выберите группу</option>
            </select>
            <select
              name="month"
              id="month"
              className={`${baseStyles.formInput} ${styles.attendanceSelect}`}
              aria-label="Select month"
            >
              <option value="">Выберите месяц</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>
                  <div className={tableHeaderContainer}>
                    ФИО ребенка:
                    <button
                      className={styles.tableArrow}
                      aria-label="Previous week"
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
                  <button className={styles.tableCheck} aria-label="Check">
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    aria-label="Check"
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    aria-label="Check"
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.tableCell}>
                  Иванов Александр Степанович
                </td>
                <td className={styles.tableCell}>
                  <button className={styles.tableCheck} aria-label="Check">
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    aria-label="Check"
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    aria-label="Check"
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.tableCell}>
                  Курочкин Владислав Игорьевич
                </td>
                <td className={styles.tableCell}>
                  <button className={styles.tableCheck} aria-label="Check">
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    aria-label="Check"
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckChecked}`}
                    aria-label="Check"
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.tableCheck}
                    aria-label="Check"
                    disabled
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
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            aria-label="Сохранить изменения"
          >
            Сохранить изменения
          </button>
        </div>
      </main>
    </>
  );
}
