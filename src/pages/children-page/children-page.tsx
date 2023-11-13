import { NavLink } from 'react-router-dom';
import baseStyles from '../base.module.css';
import styles from './children.module.css';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
import { useState } from 'react';
import Modal from '../../components/modal/modal';

export default function ChildrenPage() {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <Header>
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
      </Header>
      <Modal isActive={isModalActive} isCentral>
        <h2 className={baseStyles.modalTitle}>
          Вы действительно хотите удалить ребенка?
        </h2>
        <p className={baseStyles.modalText}>ФИО: Абрамов Пётр Иванович</p>
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
            onClick={() => setIsModalActive(false)}
          >
            Отменить
          </button>
        </div>
        <button
          className={`${baseStyles.btn} ${baseStyles.modalClose}`}
          aria-label="Close modal"
          onClick={() => setIsModalActive(false)}
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 10L10 16"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Modal>
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
              placeholder="Введите ФИО родителя"
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
            <li className={styles.childrenItem}>
              <span className={styles.childrenText}>Абрамов Пётр Иванович</span>
              <svg
                onClick={() => setIsModalActive(true)}
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
            </li>
            <li className={styles.childrenItem}>
              <span className={styles.childrenText}>
                Курочкин Владислав Игорьевич
              </span>
              <svg
                onClick={() => setIsModalActive(true)}
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
            </li>
            <li className={styles.childrenItem}>
              <span className={styles.childrenText}>
                Иванов Александр Степанович
              </span>
              <svg
                onClick={() => setIsModalActive(true)}
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
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
