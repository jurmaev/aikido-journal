import { NavLink } from 'react-router-dom';
import baseStyles from '../base.module.css';
import styles from './groups.module.css';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';
import { useState } from 'react';

export default function GroupsPage() {
  const [isGroupModalActive, setIsGroupModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const [isExitModalActive, setIsExitModalActive] = useState(false);
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
      <Modal isActive={isGroupModalActive} isCentral={false}>
        <h2 className={baseStyles.modalTitle}>Настройка группы</h2>
        <div className={styles.groupsModalInputContainer}>
          <label
            htmlFor="group"
            className={`${baseStyles.modalText} ${styles.groupsModalText}`}
          >
            Название группы:
          </label>
          <input
            id="group"
            type="text"
            className={styles.groupsModalInput}
            value="Группа1"
          />
        </div>
        <div className={styles.groupsModalInputContainer}>
          <label
            htmlFor="cost"
            className={`${baseStyles.modalText} ${styles.groupsModalText}`}
          >
            Цена за занятие в ₽:
          </label>
          <input
            id="cost"
            type="text"
            className={styles.groupsModalInput}
            value="250"
          />
        </div>
        <p className={baseStyles.modalText}>Задать расписание для группы:</p>
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
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckActive}`}
                    aria-label="Check"
                  >
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button className={styles.tableCheck} aria-label="Check">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckActive}`}
                    aria-label="Check"
                  >
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button className={styles.tableCheck} aria-label="Check">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button
                    className={`${styles.tableCheck} ${styles.tableCheckActive}`}
                    aria-label="Check"
                  >
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button className={styles.tableCheck} aria-label="Check">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button className={styles.tableCheck} aria-label="Check">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время начала"
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          className={`${baseStyles.inputGroup} ${styles.groupsModalInputGroup}`}
        >
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            onClick={() => setIsGroupModalActive(false)}
          >
            Сохранить изменения
          </button>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            onClick={() => setIsDeleteModalActive(true)}
          >
            Удалить группу
          </button>
        </div>
        <h2 className={baseStyles.modalTitle}>Список детей</h2>
        <div
          className={`${baseStyles.inputGroup} ${styles.groupsModalInputGroup}`}
        >
          <select
            name="children"
            id="children"
            className={styles.groupsModalSelect}
            aria-label="Select child"
          >
            <option value="">Выберите ребёнка</option>
          </select>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
          >
            Добавить в группу
          </button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.itemText}>Абрамов Пётр Иванович</span>
            <button
              className={`${baseStyles.btn} ${styles.listBtn}`}
              aria-label="Delete child"
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
            </button>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>
              Курочкин Владислав Игорьевич
            </span>
            <button
              className={`${baseStyles.btn} ${styles.listBtn}`}
              aria-label="Delete child"
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
            </button>
          </li>
          <li className={styles.item}>
            <span className={styles.itemText}>Иванов Александр Степанович</span>
            <button
              className={`${baseStyles.btn} ${styles.listBtn}`}
              aria-label="Delete child"
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
            </button>
          </li>
        </ul>
        <button
          className={`${baseStyles.btn} ${baseStyles.modalClose}`}
          aria-label="Close modal"
          onClick={() => setIsExitModalActive(true)}
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
      </Modal>
      <Modal isActive={isDeleteModalActive} isCentral>
        <h2 className={baseStyles.modalTitle}>
          Вы действительно хотите удалить группу?
        </h2>
        <div className={baseStyles.inputGroup}>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            onClick={() => setIsDeleteModalActive(false)}
          >
            Удалить
          </button>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            onClick={() => setIsDeleteModalActive(false)}
          >
            Отмена
          </button>
        </div>
        <button
          className={`${baseStyles.btn} ${baseStyles.modalClose}`}
          aria-label="Close modal"
          onClick={() => setIsDeleteModalActive(false)}
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
      </Modal>
      <Modal isActive={isExitModalActive} isCentral>
        <h2 className={baseStyles.modalTitle}>
          Изменения не сохранены. Вы действительно хотите выйти?
        </h2>
        <div className={baseStyles.inputGroup}>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            onClick={() => {
              setIsExitModalActive(false);
              setIsGroupModalActive(false);
            }}
          >
            Выйти
          </button>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            onClick={() => setIsExitModalActive(false)}
          >
            Отмена
          </button>
        </div>
        <button
          className={`${baseStyles.btn} ${baseStyles.modalClose}`}
          aria-label="Close modal"
          onClick={() => setIsExitModalActive(false)}
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
              onClick={() => setIsGroupModalActive(true)}
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
                onClick={() => setIsGroupModalActive(true)}
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
                onClick={() => setIsGroupModalActive(true)}
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
                onClick={() => setIsGroupModalActive(true)}
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
