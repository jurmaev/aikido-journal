import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { useAppDispatch } from '../../../hooks';
import { addNewGroup } from '../../../store/group-data/group-data';

type AddGroupProps = {
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddGroup({ setActiveGroupModal }: AddGroupProps) {
  const [groupName, setGroupName] = useState('');
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(addNewGroup(groupName.trim()));
    setActiveGroupModal(groupName.trim());
    setGroupName('');
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
          value={groupName}
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              handleClick();
            }
          }}
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
