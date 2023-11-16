import styles from './parents.module.css';
import baseStyles from '../base.module.css';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';
import { useState } from 'react';
import { parents } from '../../mocks/parents';

export default function ParentsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const children = parents.map((parent) => parent.child);

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
              {parents.map((parent) => [
                <tr key={`${parent.phone}-item`}>
                  <td className={styles.parentsData}>
                    <div className={styles.parentsDataContainer}>
                      {parent.name}
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
                          <a href={`tel:${parent.phone}`}>{parent.phone}</a>
                        </div>
                      </button>
                    </div>
                  </td>
                  <td
                    className={`${styles.parentsData} ${
                      !parent.child && styles.parentsDataEmpty
                    }`}
                  >
                    <div className={styles.parentsDataContainer}>
                      {parent.child ? parent.child : 'ребёнок не закреплён'}
                      <button
                        className={`${baseStyles.btn} ${styles.parentsBtn}`}
                        aria-label="Edit"
                        onClick={() => setActiveModal(parent.phone)}
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
                </tr>,
                <Modal
                  key={`${parent.phone}-modal`}
                  isActive={parent.phone === activeModal}
                  isCentral
                >
                  <h2 className={baseStyles.modalTitle}>
                    Закрепить ребёнка за родителем
                  </h2>
                  <p className={baseStyles.modalText}>
                    ФИО родителя: {parent.name}
                  </p>
                  <p className={baseStyles.modalText}>
                    ФИО ребёнка:{' '}
                    <span className={styles.textRed}>ребёнок не закреплён</span>
                  </p>
                  <div className={baseStyles.inputGroup}>
                    <select
                      className={`${baseStyles.formInput} ${styles.parentsModalInput}`}
                      aria-label="Children select"
                      defaultValue={parent.child}
                    >
                      <option value="">Выберите ребёнка</option>
                      {children.map(
                        (child) =>
                          child && (
                            <option key={child} value={child}>
                              {child}
                            </option>
                          )
                      )}
                    </select>
                    <button
                      className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
                    >
                      Закрепить за родителем
                    </button>
                  </div>
                  <button
                    className={`${baseStyles.btn} ${baseStyles.modalClose}`}
                    aria-label="Close modal"
                    onClick={() => setActiveModal(null)}
                  >
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="0.500366"
                        width="24"
                        height="24"
                        rx="4.5"
                        stroke="black"
                      />
                      <path
                        d="M10 10L16 16"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 10L10 16"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Modal>,
              ])}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
