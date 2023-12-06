import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { getFullName, getShortName } from '../../../utils/names';
import { Parent } from '../../../types/parents';
import { useRef, useState } from 'react';
import { Children } from '../../../types/children';
import { useIsMobile } from '../../../hooks/use-is-mobile';
import { produce } from 'immer';

type ParentsModalProps = {
  parent: Parent;
  children: Children;
  childrenOptions: Children;
  handleSelect: (selectValue: { parentId: string; childId: number }) => void;
  activeModal: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function ParentsModal({
  parent,
  children,
  childrenOptions,
  handleSelect,
  activeModal,
  setActiveModal,
}: ParentsModalProps) {
  const isMobile = useIsMobile();
  const [selectValues, setSelectValues] = useState(
    children.map((child) => {
      return {
        childId: child.id,
        parentId: parent.id,
        selectedChildId: child.id,
      };
    })
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <Modal
      isActive={activeModal === parent.id}
      isCentral
      onClose={() => setActiveModal('')}
    >
      <h2 className={baseStyles.modalTitle}>Закрепить ребёнка за родителем</h2>
      <p className={baseStyles.modalText}>
        ФИО родителя:{' '}
        {isMobile ? getShortName(getFullName(parent)) : getFullName(parent)}
      </p>

      {children.length !== 0 &&
        children.map((child) => (
          <p key={`${child.id}-full-name`} className={baseStyles.modalText}>
            ФИО ребёнка:{' '}
            <span
              className={cn(baseStyles.modalText, {
                [styles.parentsDataEmpty]: !child,
              })}
            >
              {child && isMobile
                ? getShortName(getFullName(child))
                : child
                ? getFullName(child)
                : 'ребёнок не закреплён'}
            </span>
          </p>
        ))}

      <p className={baseStyles.modalText}>
        ФИО ребёнка:{' '}
        <span className={cn(baseStyles.modalText, styles.parentsDataEmpty)}>
          ребёнок не закреплён
        </span>
      </p>

      {children.length !== 0 &&
        children.map((child) => (
          <div key={`${child.id}-select`} className={baseStyles.inputGroup}>
            <select
              className={cn(baseStyles.formInput, styles.parentsModalInput)}
              aria-label="Children select"
              defaultValue={child ? child.id : ''}
              onChange={(evt) => {
                setSelectValues(
                  produce((draft) => {
                    const foundItem = draft.find(
                      (item) => item.childId === child.id
                    )!;
                    foundItem.selectedChildId = Number(evt.target.value);
                  })
                );
              }}
            >
              <option value="">Выберите ребёнка</option>
              <option value={child.id}>{getFullName(child)}</option>
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
              className={cn(
                baseStyles.btn,
                baseStyles.btnBlue,
                baseStyles.btnLarge
              )}
              onClick={() =>
                handleSelect(
                  selectValues.find((value) => value.childId === child.id)!
                )
              }
              disabled={
                selectValues.find(
                  (value) => value.selectedChildId === child.id
                ) !== undefined
              }
            >
              Закрепить
            </button>
          </div>
        ))}

      <div className={baseStyles.inputGroup}>
        <select
          className={cn(baseStyles.formInput, styles.parentsModalInput)}
          aria-label="Children select"
          ref={selectRef}
          onChange={(evt) => {
            setSelectValues(
              produce((draft) => {
                draft.push({
                  childId: Number(evt.target.value),
                  parentId: parent.id,
                  selectedChildId: Number(evt.target.value),
                });
              })
            );
          }}
        >
          <option value="">Выберите ребёнка</option>
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
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={() =>
            handleSelect(
              selectValues.find(
                (value) => value.childId === Number(selectRef.current?.value)
              )!
            )
          }
        >
          Закрепить
        </button>
      </div>
    </Modal>
  );
}
