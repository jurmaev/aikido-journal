import { NavLink } from 'react-router-dom';
import baseStyles from '../base.module.css';
import styles from './children.module.css';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
import { useState } from 'react';
import Modal from '../../components/modal/modal';
import { children } from '../../mocks/children';

export default function ChildrenPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
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
        <div className={`${baseStyles.container} ${styles.childrenContainer}`}>
          <h1 className={styles.childrenTitle}>Дети</h1>
          <label htmlFor="child" className={styles.childrenLabel}>
            Добавить ребёнка
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.childrenInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.childrenInput}`}
              id="child"
              placeholder="Введите ФИО ребёнка"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            >
              Добавить ребёнка
            </button>
          </div>
          <label htmlFor="search" className={styles.childrenLabel}>
            Список детей
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.childrenInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.childrenInput}`}
              id="search"
              placeholder="Введите ФИО ребёнка"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.childrenList}>
            {children.map((child) => [
              <li key={`${child}-item`} className={styles.childrenItem}>
                <span className={styles.childrenText}>{child}</span>
                <svg
                  onClick={() => setActiveModal(child)}
                  className={styles.childrenIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9L9 15"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9L15 15"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>,
              <Modal
                key={`${child}-modal`}
                isActive={activeModal === child}
                isCentral
              >
                <h2 className={baseStyles.modalTitle}>
                  Вы действительно хотите удалить ребенка?
                </h2>
                <p className={baseStyles.modalText}>ФИО: {child}</p>
                <div className={baseStyles.inputGroup}>
                  <button
                    className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
                    aria-label="Удалить"
                  >
                    Удалить
                  </button>
                  <button
                    className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
                    aria-label="Отменить"
                    onClick={() => setActiveModal(null)}
                  >
                    Отменить
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
          </ul>
        </div>
      </main>
    </>
  );
}
