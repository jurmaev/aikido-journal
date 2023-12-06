import { Child, Children } from '../../../types/children';
import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import { getFullName } from '../../../utils/names';
import { useState } from 'react';

type ChildSelectProps = {
  child: Child | null;
  parentId: string;
  childrenOptions: Children;
  handleSelect: (parentId: string, childId: number) => void;
};

export default function ChildSelect({
  child,
  parentId,
  childrenOptions,
  handleSelect,
}: ChildSelectProps) {
  const [selectValue, setSelectValue] = useState({
    childId: child ? child.id : -1,
    parentId: parentId,
    selectedChildId: child && child.id,
  });

  return (
    <div
      key={`${parentId}-${child && child.id}-select`}
      className={baseStyles.inputGroup}
    >
      <select
        className={cn(baseStyles.formInput, styles.parentsModalInput)}
        aria-label="Children select"
        defaultValue={child ? child.id : ''}
        onChange={(evt) => {
          if (child) {
            setSelectValue({
              ...selectValue,
              selectedChildId: Number(evt.target.value),
            });
          } else {
            setSelectValue({
              ...selectValue,
              selectedChildId: Number(evt.target.value),
              childId: Number(evt.target.value),
            });
          }
        }}
      >
        <option value="-1">Выберите ребёнка</option>
        {child && <option value={child.id}>{getFullName(child)}</option>}
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
        disabled={
          child
            ? selectValue.selectedChildId === child.id
            : selectValue.selectedChildId === -1
        }
      >
        Закрепить
      </button>
    </div>
  );
}
