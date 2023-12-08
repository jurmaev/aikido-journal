import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { useAppDispatch } from '../../../hooks';
import { addEmptyGroup } from '../../../store/group-data/group-data';

type AddGroupProps = {
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddGroup({ setActiveGroupModal }: AddGroupProps) {
  const [groupName, setGroupName] = useState('');
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(addEmptyGroup(groupName.trim()));
    setActiveGroupModal(groupName.trim());
  }

  return (
    <>
      <label htmlFor="group" className={styles.groupsLabel}>
        Создать группу
      </label>
      <div className={cn(baseStyles.inputGroup, styles.groupsInputGroup)}>
        <input
          type="text"
          className={cn(baseStyles.formInput, styles.groupsInput)}
          id="group"
          placeholder="Придумайте название группы"
          onChange={(evt) => setGroupName(evt.target.value)}
        />
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          onClick={handleClick}
        >
          Создать
        </button>
      </div>
    </>
  );
}
