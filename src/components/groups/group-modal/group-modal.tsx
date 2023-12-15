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
  setGroupParameters,
} from '../../../store/group-data/api-actions';
import { removeNewGroup } from '../../../store/group-data/group-data';
import { getDatetime } from '../../../utils/datetime';
import { createPortal } from 'react-dom';

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
  const [price, setPrice] = useState(String(group.price));
  const [isChanged, setIsChanged] = useState(false);
  const [isExitModalActive, setIsExitModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const dispatch = useAppDispatch();
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);
  const validDays = groupState.days.map((day) => {
    if (day) {
      return { start: day.start !== '', end: day.end !== '' };
    }
    return { start: true, end: true };
  });

  function handleNameChange(name: string) {
    setGroupState(
      produce((draft) => {
        draft.name = name.trim();
      })
    );
    setIsChanged(true);
  }

  function handlePriceChange(price: string) {
    setPrice(price);
    // if (price !== '') {
    //   setGroupState(
    //     produce((draft) => {
    //       draft.price = Number(price);
    //     })
    //   );
    // }
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
    let isValid = true;

    if (groupState.name.trim().length < 5) {
      setIsValidName(false);
      isValid = false;
    } else {
      setIsValidName(true);
    }

    if (price === '') {
      setIsValidPrice(false);
      isValid = false;
    } else {
      setIsValidPrice(true);
    }

    groupState.days.forEach((day) => {
      if (day?.start === '' || day?.end === '') {
        isValid = false;
      }
    });

    if (isValid) {
      const newGroup = {
        ...groupState,
        days: groupState.days.map((day) => getDatetime(day)),
        price: Number(price),
      };

      if (!isNew) {
        dispatch(setGroupParameters({ name: group.name, group: newGroup }));
        setActiveGroupModal('');
        setIsChanged(false);
      } else {
        dispatch(createGroup(newGroup));
        dispatch(removeNewGroup());
        setActiveGroupModal('');
      }
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
    if (isChanged || isNew) {
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
      {createPortal(
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
            isValid={isValidName}
          />

          <GroupPrice
            name={group.name}
            value={price}
            onChange={handlePriceChange}
            isValid={isValidPrice}
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
                    validity={validDays[index]}
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
              disabled={isNew}
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
        </Modal>,
        document.body
      )}
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
