import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import AddGroup from '../add-group/add-group';
import SearchGroups from '../search-groups/search-groups';
import { groups } from '../../../mocks/groups';
import Modal from '../../modal/modal';
import GroupModal from '../group-modal/group-modal';

export default function GroupList() {
  const [activeGroupModal, setActiveGroupModal] = useState<string>('');
  const [activeDeleteModal, setActiveDeleteModal] = useState<string>('');
  const [activeExitModal, setActiveExitModal] = useState<string>('');
  const [groupsState, setGroupsState] = useState(groups);

  return (
    <>
      <AddGroup setActiveGroupModal={setActiveGroupModal} />

      <SearchGroups />

      <ul className={styles.groupsList}>
        {groupsState.map((group) => [
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
          <GroupModal
            key={`${group}-modal`}
            group={group}
            activeGroupModal={activeGroupModal}
            setActiveGroupModal={setActiveGroupModal}
            setActiveExitModal={setActiveExitModal}
            setActiveDeleteModal={setActiveDeleteModal}
            onSave={setGroupsState}
          />,
          <Modal
            key={`${group.id}-delete-modal`}
            isActive={activeDeleteModal === group.id}
            isCentral
            onClose={() => setActiveDeleteModal('')}
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
                onClick={() => setActiveDeleteModal('')}
              >
                Удалить
              </button>
              <button
                className={cn(
                  baseStyles.btn,
                  baseStyles.btnBlue,
                  baseStyles.btnLarge
                )}
                onClick={() => setActiveDeleteModal('')}
              >
                Отмена
              </button>
            </div>
          </Modal>,
          <Modal
            key={`${group.id}-exit-modal`}
            isActive={activeExitModal === group.id}
            isCentral
            onClose={() => setActiveExitModal('')}
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
                  setActiveExitModal('');
                  setActiveGroupModal('');
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
                onClick={() => setActiveExitModal('')}
              >
                Отмена
              </button>
            </div>
          </Modal>,
        ])}
      </ul>
    </>
  );
}
