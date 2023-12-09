import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { Group, TrainingTime } from '../../../types/group';
import { useState } from 'react';
import { produce } from 'immer';
import GroupChildItem from '../group-child-item/group-child-item';
import ExitGroupModal from '../exit-group-modal/exit-group-modal';
import DeleteGroupModal from '../delete-group-modal/delete-group-modal';
import GroupName from '../group-name/group-name';
import GroupPrice from '../group-price/group-price';
import GroupTime from '../group-time/group-time';
import AddChild from '../add-child/add-child';
import { useAppDispatch } from '../../../hooks';
import {
  addChild,
  createGroup,
  removeChild,
  removeGroup,
} from '../../../store/group-data/api-actions';
import { removeNewGroup } from '../../../store/group-data/group-data';

type GroupModalProps = {
  group: Group;
  activeGroupModal: string;
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
  isNew: boolean;
};

export default function GroupModal({
  group,
  activeGroupModal,
  setActiveGroupModal,
  isNew,
}: GroupModalProps) {
  const [groupState, setGroupState] = useState(group);
  const [isChanged, setIsChanged] = useState(false);
  const [isExitModalActive, setIsExitModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const dispatch = useAppDispatch();

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

  function handleDeleteChild(id: number) {
    dispatch(removeChild({ name: group.name, childId: id }));
    setIsChanged(true);
  }

  function handleAddChild(childId: number) {
    if (childId === -1) return;
    dispatch(addChild({ name: group.name, childId: childId }));
  }

  function handleCheckClick(day: TrainingTime | null, index: number) {
    if (!day) {
      day = { start: '', end: '' };
    } else {
      day = null;
    }
    setGroupState(
      produce((draft) => {
        draft.days[index] = day;
      })
    );
    setIsChanged(true);
  }

  function handleSaveClick() {
    if (!isNew) {
      onSave(
        produce((draft) => {
          draft = draft.filter((draftGroup) => draftGroup.id !== group.id);
          draft.push(groupState);
        })
      );
      setActiveGroupModal('');
    } else {
      dispatch(createGroup(groupState));
      dispatch(removeNewGroup());
    }
  }

  function handleStartTimeChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setGroupState(
      produce((draft) => {
        if (draft.days[index]) {
          draft.days[index]!.start = evt.target.value;
        } else {
          draft.days[index] = { start: evt.target.value, end: '' };
        }
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
        if (draft.days[index]) {
          draft.days[index]!.end = evt.target.value;
        } else {
          draft.days[index] = { end: evt.target.value, start: '' };
        }
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

  function handleDeleteGroup() {
    dispatch(removeGroup(group.name));
  }

  return (
    <>
      <Modal
        isActive={activeGroupModal === group.name}
        isCentral={false}
        onClose={handleCloseClick}
      >
        <h2 className={baseStyles.modalTitle}>Настройка группы</h2>

        <GroupName
          name={group.name}
          value={groupState.name}
          onChange={handleNameChange}
        />

        <GroupPrice
          name={group.name}
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
              {groupState.days.map((day, index) => (
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

        <AddChild name={group.name} handleAddChild={handleAddChild} />

        <ul className={styles.list}>
          {group.children.map((child) => (
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
        onDelete={handleDeleteGroup}
      />
    </>
  );
}
