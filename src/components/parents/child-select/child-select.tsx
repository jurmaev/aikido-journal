import { Children } from '../../../types/children';
import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import { getFullName } from '../../../utils/names';
import { useState } from 'react';

type ChildSelectProps = {
  parentId: string;
  childrenOptions: Children;
  handleSelect: (parentId: string, childId: number) => void;
};

export default function ChildSelect({
  parentId,
  childrenOptions,
  handleSelect,
}: ChildSelectProps) {
  const [selectValue, setSelectValue] = useState({
    childId: -1,
    parentId: parentId,
    selectedChildId: -1,
  });

  return (
    <div key={`${parentId}-select`} className={baseStyles.inputGroup}>
      <select
        className={cn(baseStyles.formInput, styles.parentsModalInput)}
        aria-label="Children select"
        name='Child select'
        defaultValue="-1"
        onChange={(evt) => {
          setSelectValue({
            ...selectValue,
            selectedChildId: Number(evt.target.value),
            childId: Number(evt.target.value),
          });
        }}
      >
        <option value="-1">Выберите ребёнка</option>
        {childrenOptions.map(
          (child) =>
            child && (
              <option key={child.id} value={child.id}>
                {getFullName(child)}
              </option>
            )
        )}
      </select>
      <button
        className={cn(baseStyles.btn, baseStyles.btnBlue, baseStyles.btnLarge)}
        onClick={() => handleSelect(selectValue.parentId, selectValue.childId)}
        disabled={selectValue.selectedChildId === -1}
      >
        Закрепить
      </button>
    </div>
  );
}
