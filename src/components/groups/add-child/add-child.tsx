import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { getFullName } from '../../../utils/names';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { getChildrenWithoutGroup } from '../../../store/group-data/group-data.selectors';

type AddChildProps = {
  name: string;
  handleAddChild: (childId: number) => void;
};

export default function AddChild({ name, handleAddChild }: AddChildProps) {
  const [selectValue, setSelectValue] = useState('');
  const children = useAppSelector(getChildrenWithoutGroup);

  return (
    <div className={cn(baseStyles.inputGroup, styles.groupsModalInputGroup)}>
      <select
        name="children"
        id={`children-${name}`}
        className={styles.groupsModalSelect}
        aria-label="Select child"
        value={selectValue}
        onChange={(evt) => setSelectValue(evt.target.value)}
      >
        <option value="-1">Выберите ребёнка</option>
        {children.map((child) => (
          <option key={child.id} value={child.id}>
            {getFullName(child)}
          </option>
        ))}
      </select>
      <button
        className={cn(baseStyles.btn, baseStyles.btnBlue, baseStyles.btnLarge)}
        onClick={() => handleAddChild(Number(selectValue))}
        disabled={selectValue === ''}
      >
        Добавить в группу
      </button>
    </div>
  );
}
