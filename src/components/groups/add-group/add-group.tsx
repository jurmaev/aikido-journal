import { useState } from 'react';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { useAppDispatch } from '../../../hooks';
import { addNewGroup } from '../../../store/group-data/group-data';
import { hasNumber, isCyryllic } from '../../../utils/names';

type AddGroupProps = {
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddGroup({ setActiveGroupModal }: AddGroupProps) {
  const [groupName, setGroupName] = useState('');
  const [errorText, setErrorText] = useState('');
  const dispatch = useAppDispatch();

  function handleClick() {
    if (groupName.trim().length < 5) {
      setErrorText('Название группы должно быть не менее 5 символов');
    } else if (hasNumber(groupName)) {
      setErrorText('Название группы не должно содержать цифр');
    } else if (!isCyryllic(groupName)) {
      setErrorText('Название группы должно содержать только кириллицу');
    } else {
      dispatch(addNewGroup(groupName.trim()));
      setActiveGroupModal(groupName.trim());
      setGroupName('');
      setErrorText('');
    }
  }

  return (
    <>
      <label htmlFor="group" className={styles.groupsLabel}>
        Создать группу
      </label>
      <p className={baseStyles.formError}>{errorText}</p>
      <div className={cn(baseStyles.inputGroup, styles.groupsInputGroup)}>
        <input
          type="text"
          className={cn(baseStyles.formInput, styles.groupsInput, {
            [baseStyles.formInputError]: errorText !== '',
          })}
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
