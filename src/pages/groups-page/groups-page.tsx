import baseStyles from '../base.module.css';
import styles from './groups.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';
import { useState } from 'react';
import cn from 'classnames';
import { groups } from '../../mocks/groups';
import { getFullName } from '../../utils/names';

export default function GroupsPage() {
  const [activeGroupModal, setActiveGroupModal] = useState<string | null>(null);
  const [activeDeleteModal, setActiveDeleteModal] = useState<string | null>(
    null
  );
  const [activeExitModal, setActiveExitModal] = useState<string | null>(null);

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.groupsContainer)}>
          <h1 className={styles.groupsTitle}>Группы</h1>
          <label htmlFor="group" className={styles.groupsLabel}>
            Создать группу
          </label>
          <div className={cn(baseStyles.inputGroup, styles.groupsInputGroup)}>
            <input
              type="text"
              className={cn(baseStyles.formInput, styles.groupsInput)}
              id="group"
              placeholder="Придумайте название группы"
            />
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnRed,
                baseStyles.btnLarge
              )}
              onClick={() => setActiveGroupModal('')}
            >
              Создать
            </button>
          </div>
          <label htmlFor="list" className={styles.groupsLabel}>
            Список групп
          </label>
          <div className={cn(baseStyles.inputGroup, styles.groupsInputGroup)}>
            <input
              type="text"
              className={cn(baseStyles.formInput, styles.groupsInput)}
              id="list"
              placeholder="Введите название группы"
            />
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnBlue,
                baseStyles.btnLarge
              )}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.groupsList}>
            {groups.map((group) => [
              <li key={group.id} className={styles.groupsItem}>
                <span>{group.name}</span>
                <button
                  className={cn(baseStyles.btn, styles.groupsBtn)}
                  aria-label="Edit group"
                  onClick={() => setActiveGroupModal(group.id)}
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
              </li>,
              <Modal
                key={`${group.id}-modal`}
                isActive={activeGroupModal === group.id}
                isCentral={false}
              >
                <h2 className={baseStyles.modalTitle}>Настройка группы</h2>
                <div className={styles.groupsModalInputContainer}>
                  <label
                    htmlFor="group"
                    className={cn(baseStyles.modalText, styles.groupsModalText)}
                  >
                    Название группы:
                  </label>
                  <input
                    id="group"
                    type="text"
                    className={styles.groupsModalInput}
                    defaultValue={group.name}
                  />
                </div>
                <div className={styles.groupsModalInputContainer}>
                  <label
                    htmlFor="cost"
                    className={cn(baseStyles.modalText, styles.groupsModalText)}
                  >
                    Цена за занятие в ₽:
                  </label>
                  <input
                    id="cost"
                    type="text"
                    className={styles.groupsModalInput}
                    defaultValue={group.price}
                  />
                </div>
                <p className={baseStyles.modalText}>
                  Задать расписание для группы:
                </p>
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
                      {group.schedule.map((day, index) => (
                        <td key={index} className={styles.tableCell}>
                          <div className={styles.tableCellContainer}>
                            <button
                              className={cn(styles.tableCheck, {
                                [styles.tableCheckActive]: day,
                              })}
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
                              defaultValue={day?.startTime}
                            />
                            <input
                              type="text"
                              className={styles.tableInput}
                              placeholder="Время окончания"
                              defaultValue={day?.endTime}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <div
                  className={cn(
                    baseStyles.inputGroup,
                    styles.groupsModalInputGroup
                  )}
                >
                  <button
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnBlue,
                      baseStyles.btnLarge
                    )}
                    onClick={() => setActiveGroupModal(null)}
                  >
                    Сохранить изменения
                  </button>
                  <button
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnRed,
                      baseStyles.btnLarge
                    )}
                    onClick={() => setActiveDeleteModal(group.id)}
                  >
                    Удалить группу
                  </button>
                </div>
                <h2 className={baseStyles.modalTitle}>Список детей</h2>
                <div
                  className={cn(
                    baseStyles.inputGroup,
                    styles.groupsModalInputGroup
                  )}
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
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnBlue,
                      baseStyles.btnLarge
                    )}
                  >
                    Добавить в группу
                  </button>
                </div>
                <ul className={styles.list}>
                  {group.children.map((child) => (
                    <li key={child.id} className={styles.item}>
                      <span className={styles.itemText}>
                        {getFullName(child)}
                      </span>
                      <button
                        className={cn(baseStyles.btn, styles.listBtn)}
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
                  ))}
                </ul>
                <button
                  className={cn(baseStyles.btn, baseStyles.modalClose)}
                  aria-label="Close modal"
                  onClick={() => setActiveExitModal(group.id)}
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
              <Modal
                key={`${group.id}-delete-modal`}
                isActive={activeDeleteModal === group.id}
                isCentral
              >
                <h2 className={baseStyles.modalTitle}>
                  Вы действительно хотите удалить группу?
                </h2>
                <div className={baseStyles.inputGroup}>
                  <button
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnRed,
                      baseStyles.btnLarge
                    )}
                    onClick={() => setActiveDeleteModal(null)}
                  >
                    Удалить
                  </button>
                  <button
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnBlue,
                      baseStyles.btnLarge
                    )}
                    onClick={() => setActiveDeleteModal(group.id)}
                  >
                    Отмена
                  </button>
                </div>
                <button
                  className={cn(baseStyles.btn, baseStyles.modalClose)}
                  aria-label="Close modal"
                  onClick={() => setActiveDeleteModal(null)}
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
              <Modal
                key={`${group.id}-exit-modal`}
                isActive={activeExitModal === group.id}
                isCentral
              >
                <h2 className={baseStyles.modalTitle}>
                  Изменения не сохранены. Вы действительно хотите выйти?
                </h2>
                <div className={baseStyles.inputGroup}>
                  <button
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnRed,
                      baseStyles.btnLarge
                    )}
                    onClick={() => {
                      setActiveExitModal(null);
                      setActiveGroupModal(null);
                    }}
                  >
                    Выйти
                  </button>
                  <button
                    className={cn(
                      baseStyles.btn,
                      baseStyles.btnBlue,
                      baseStyles.btnLarge
                    )}
                    onClick={() => setActiveExitModal(null)}
                  >
                    Отмена
                  </button>
                </div>
                <button
                  className={cn(baseStyles.btn, baseStyles.modalClose)}
                  aria-label="Close modal"
                  onClick={() => setActiveExitModal(null)}
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
