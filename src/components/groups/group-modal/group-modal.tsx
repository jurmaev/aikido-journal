import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { Group, TrainingTime } from '../../../types/group';
import { useState } from 'react';
import { produce } from 'immer';
import { children } from '../../../mocks/children';
import GroupChildItem from '../group-child-item/group-child-item';
import { Child } from '../../../types/children';
import ExitGroupModal from '../exit-group-modal/exit-group-modal';
import DeleteGroupModal from '../delete-group-modal/delete-group-modal';
import GroupName from '../group-name/group-name';
import GroupPrice from '../group-price/group-price';
import GroupTime from '../group-time/group-time';
import AddChild from '../add-child/add-child';

type GroupModalProps = {
  group: Group;
  activeGroupModal: string;
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
  onSave: React.Dispatch<React.SetStateAction<Group[]>>;
};

export default function GroupModal({
  group,
  activeGroupModal,
  setActiveGroupModal,
  onSave,
}: GroupModalProps) {
  const [groupState, setGroupState] = useState(group);
  const [isChanged, setIsChanged] = useState(false);
  const [isExitModalActive, setIsExitModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  function handleNameChange(name: string) {
    setGroupState(
      produce((draft) => {
        draft.name = name.trim();
      })
    );
    setIsChanged(true);
  }

  function handlePriceChange(price: number) {
    setGroupState(
      produce((draft) => {
        draft.price = price;
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

  function handleAddChild(childId: string) {
    if (childId === '') return;
    if (!groupState.children.some((child) => child.id === childId)) {
      setGroupState(
        produce((draft) => {
          draft.children.push(
            children.find((child) => child.id === childId) as Child
          );
        })
      );
      setIsChanged(true);
    }
  }

  function handleCheckClick(day: TrainingTime | null, index: number) {
    if (!day) {
      day = { startTime: '', endTime: '' };
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
      setIsExitModalActive(true);
    } else {
      setGroupState(group);
      setActiveGroupModal('');
      setIsChanged(false);
    }
  }

  function handleExit() {
    setGroupState(group);
    setIsChanged(false);
  }

  return (
    <>
      <Modal
        isActive={activeGroupModal === group.id}
        isCentral={false}
        onClose={handleCloseClick}
      >
        <h2 className={baseStyles.modalTitle}>Настройка группы</h2>

        <GroupName
          id={group.id}
          value={groupState.name}
          onChange={handleNameChange}
        />

        <GroupPrice
          id={group.id}
          value={groupState.price}
          onChange={handlePriceChange}
        />

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
                <GroupTime
                  key={index}
                  day={day}
                  index={index}
                  handleCheckClick={handleCheckClick}
                  handleEndTimeChange={handleEndTimeChange}
                  handleStartTimeChange={handleStartTimeChange}
                />
              ))}
            </tr>
          </tbody>
        </table>

        <div
          className={cn(baseStyles.inputGroup, styles.groupsModalInputGroup)}
        >
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
            className={cn(
              baseStyles.btn,
              baseStyles.btnRed,
              baseStyles.btnLarge
            )}
            onClick={() => setIsDeleteModalActive(true)}
          >
            Удалить группу
          </button>
        </div>

        <h2 className={baseStyles.modalTitle}>Список детей</h2>

        <AddChild id={group.id} handleAddChild={handleAddChild} />

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
      <ExitGroupModal
        isActive={isExitModalActive}
        setIsActive={setIsExitModalActive}
        setActiveGroupModal={setActiveGroupModal}
        onExit={handleExit}
      />
      <DeleteGroupModal
        isActive={isDeleteModalActive}
        setIsActive={setIsDeleteModalActive}
        setActiveGroupModal={setActiveGroupModal}
      />
    </>
  );
}
