import baseStyles from '../base.module.css';
import styles from './parent.module.css';

export default function ParentSchedulePage() {
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
          <nav className={`${baseStyles.nav} ${styles.nav}`}>
            <ul className={baseStyles.navList}>
              <li className={baseStyles.navItem}>
                <a href="#">Профиль</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Расписание</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Посещаемость</a>
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
        <div className={`${baseStyles.container} ${styles.scheduleContainer}`}>
          <h1 className={styles.scheduleTitle}>Расписание</h1>
          <p className={styles.scheduleText}>Ребёнок: Абрамов Пётр Иванович</p>
          <p className={styles.scheduleText}>Название группы: Группа1</p>
          <p className={styles.scheduleText}>Цена за занятие: 250₽</p>
          <p className={styles.scheduleText}>Расписание:</p>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>Пн</th>
                <th className={styles.tableHeader}>Вт</th>
                <th className={styles.tableHeader}>Ср</th>
                <th className={styles.tableHeader}>Чт</th>
                <th className={styles.tableHeader}>Пт</th>
                <th className={styles.tableHeader}>Сб</th>
                <th className={styles.tableHeader}>Вс</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableCheck}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.tableTime}>18:30 - 19:30</div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableCheck}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.tableTime}>18:30 - 19:30</div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableCheck}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.tableTime}>18:30 - 19:30</div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
