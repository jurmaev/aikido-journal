import styles from './parents.module.css';
import baseStyles from '../base.module.css';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
export default function ParentsPage() {
  return (
    <>
      <Header>
        <nav className={baseStyles.nav}>
          <ul className={baseStyles.navList}>
            <li>
              <NavLink
                to={AppRoutes.Children}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Дети
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Parents}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Родители
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Groups}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Группы
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Attendance}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Посещаемость
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Payment}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Задолженность
              </NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <div className={`${baseStyles.container} ${styles.parentsContainer}`}>
          <h1 className={styles.parentsHeader}>Родители</h1>
          <label htmlFor="search" className={styles.parentsLabel}>
            Список (Родитель/Ребёнок)
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.parentsInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.formInput}`}
              id="search"
              placeholder="Введите ФИО родителя"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Поиск
            </button>
          </div>
          <table className={styles.parentsTable}>
            <thead>
              <tr>
                <th className={styles.parentsData}>Родитель</th>
                <th className={styles.parentsData}>Ребёнок</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Абрамова Маргарита Львовна
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className={styles.tooltip}>
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Абрамов Пётр Иванович
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Курочкина Светлана Алексеевна
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className={styles.tooltip}>
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Курочкин Владислав Игорьевич
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Иванова Наталья Сергеевна
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className={styles.tooltip}>
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Иванов Александр Степанович
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.parentsData}>
                  <div className={styles.parentsDataContainer}>
                    Терешенко Екатерина Николаевна
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className={styles.tooltip}>
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td
                  className={`${styles.parentsData} ${styles.parentsDataEmpty}`}
                >
                  <div className={styles.parentsDataContainer}>
                    ребёнок не закреплён
                    <button
                      className={`${baseStyles.btn} ${styles.parentsBtn}`}
                      aria-label="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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
