import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import Modal from '../../modal/modal';
import { Group, TrainingTime } from '../../../types/group';
import { getFullName } from '../../../utils/names';
import { useRef, useState } from 'react';
import { produce } from 'immer';
import { children } from '../../../mocks/children';
import GroupChildItem from '../group-child-item/group-child-item';
import { Child } from '../../../types/children';

type GroupModalProps = {
  group: Group;
  activeGroupModal: string;
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
  setActiveExitModal: React.Dispatch<React.SetStateAction<string>>;
  setActiveDeleteModal: React.Dispatch<React.SetStateAction<string>>;
  onSave: React.Dispatch<React.SetStateAction<Group[]>>;
};

export default function GroupModal({
  group,
  activeGroupModal,
  setActiveGroupModal,
  setActiveDeleteModal,
  setActiveExitModal,
  onSave,
}: GroupModalProps) {
  const [groupState, setGroupState] = useState(group);
  const [isChanged, setIsChanged] = useState(false);
  const childSelectRef = useRef<HTMLSelectElement | null>(null);

  function handleNameInput(evt: React.ChangeEvent<HTMLInputElement>) {
    setGroupState(
      produce((draft) => {
        draft.name = evt.target.value.trim();
      })
    );
    setIsChanged(true);
  }

  function handlePriceInput(evt: React.ChangeEvent<HTMLInputElement>) {
    setGroupState(
      produce((draft) => {
        draft.price = Number(evt.target.value);
      })
    );
    setIsChanged(true);
  }

  function handleDeleteChild(id: string) {
    setGroupState(
      produce((draft) => {
        draft.children = draft.children.filter((child) => child.id !== id);
      })
    );
    setIsChanged(true);
  }

  function handleAddChild() {
    if (!childSelectRef.current || childSelectRef.current.value === '') return;
    if (
      !groupState.children.some(
        (child) => child.id === childSelectRef.current?.value
      )
    ) {
      setGroupState(
        produce((draft) => {
          draft.children.push(
            children.find(
              (child) => child.id === childSelectRef.current?.value
            ) as Child
          );
        })
      );
      setIsChanged(true);
    }
  }

  function handleCheckClick(day: TrainingTime | null, index: number) {
    if (!day) {
      day = { startTime: '00:00', endTime: '00:00' };
    } else {
      day = null;
    }
    setGroupState(
      produce((draft) => {
        draft.schedule[index] = day;
      })
    );
    setIsChanged(true);
  }

  function handleSaveClick() {
    onSave(
      produce((draft) => {
        draft = draft.filter((draftGroup) => draftGroup.id !== group.id);
        draft.push(groupState);
      })
    );
    setActiveGroupModal('');
  }

  function handleStartTimeChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setGroupState(
      produce((draft) => {
        draft.schedule[index]!.startTime = evt.target.value;
      })
    );
    setIsChanged(true);
  }

  function handleEndTimeChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setGroupState(
      produce((draft) => {
        draft.schedule[index]!.endTime = evt.target.value;
      })
    );
    setIsChanged(true);
  }

  function handleCloseClick() {
    if (isChanged) {
      setActiveExitModal(group.id);
    } else {
      setGroupState(group);
      setActiveGroupModal('');
    }
    setIsChanged(false);
  }

  return (
    <Modal
      isActive={activeGroupModal === group.id}
      isCentral={false}
      onClose={handleCloseClick}
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
          value={groupState.name}
          onChange={handleNameInput}
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
          type="number"
          className={styles.groupsModalInput}
          value={groupState.price}
          onChange={handlePriceInput}
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
            {groupState.schedule.map((day, index) => (
              <td key={index} className={styles.tableCell}>
                <div className={styles.tableCellContainer}>
                  <button
                    className={cn(styles.tableCheck, {
                      [styles.tableCheckActive]: day,
                    })}
                    aria-label="Check"
                    onClick={() => handleCheckClick(day, index)}
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
                    value={
                      groupState.schedule[index]
                        ? groupState.schedule[index]?.startTime
                        : ''
                    }
                    onChange={(evt) => handleStartTimeChange(evt, index)}
                  />
                  <input
                    type="text"
                    className={styles.tableInput}
                    placeholder="Время окончания"
                    value={
                      groupState.schedule[index]
                        ? groupState.schedule[index]?.endTime
                        : ''
                    }
                    onChange={(evt) => handleEndTimeChange(evt, index)}
                  />
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className={cn(baseStyles.inputGroup, styles.groupsModalInputGroup)}>
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={handleSaveClick}
        >
          Сохранить изменения
        </button>
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          onClick={() => setActiveDeleteModal(group.id)}
        >
          Удалить группу
        </button>
      </div>
      <h2 className={baseStyles.modalTitle}>Список детей</h2>
      <div className={cn(baseStyles.inputGroup, styles.groupsModalInputGroup)}>
        <select
          name="children"
          id="children"
          className={styles.groupsModalSelect}
          aria-label="Select child"
          ref={childSelectRef}
        >
          <option value="">Выберите ребёнка</option>
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {getFullName(child)}
            </option>
          ))}
        </select>
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={handleAddChild}
        >
          Добавить в группу
        </button>
      </div>
      <ul className={styles.list}>
        {groupState.children.map((child) => (
          <GroupChildItem
            key={child.id}
            child={child}
            handleDelete={handleDeleteChild}
          />
        ))}
      </ul>
    </Modal>
  );
}
