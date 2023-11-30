import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { getFullName } from '../../../utils/names';
import { children } from '../../../mocks/children';
import { useState } from 'react';

type AddChildProps = {
  id: string;
  handleAddChild: (childId: string) => void;
};

export default function AddChild({ id, handleAddChild }: AddChildProps) {
  const [selectValue, setSelectValue] = useState('');

  return (
    <div className={cn(baseStyles.inputGroup, styles.groupsModalInputGroup)}>
      <select
        name="children"
        id={`children-${id}`}
        className={styles.groupsModalSelect}
        aria-label="Select child"
        value={selectValue}
        onChange={(evt) => setSelectValue(evt.target.value)}
      >
        <option value="">Выберите ребёнка</option>
        {children.map((child) => (
          <option key={child.id} value={child.id}>
            {getFullName(child)}
          </option>
        ))}
      </select>
      <button
        className={cn(baseStyles.btn, baseStyles.btnBlue, baseStyles.btnLarge)}
        onClick={() => handleAddChild(selectValue)}
      >
        Добавить в группу
      </button>
    </div>
  );
}
