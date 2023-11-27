import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { getFullName, getShortName } from '../../../utils/names';
import { children } from '../../../mocks/children';
import { Parent } from '../../../types/parents';
import { useState } from 'react';

type ParentsModalProps = {
  parent: Parent;
  errorText: string;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
  handleSelect: (selectValue: { parentId: string; childId: string }) => void;
  activeModal: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function ParentsModal({
  parent,
  errorText,
  setErrorText,
  handleSelect,
  activeModal,
  setActiveModal,
}: ParentsModalProps) {
  const isMobile = window.innerWidth < 1024;
  const [selectValue, setSelectValue] = useState({ parentId: '', childId: '' });

  return (
    <Modal
      isActive={activeModal === parent.id}
      isCentral
      onClose={() => {
        setActiveModal('');
        setErrorText('');
      }}
    >
      <h2 className={baseStyles.modalTitle}>Закрепить ребёнка за родителем</h2>
      <p className={baseStyles.modalText}>
        ФИО родителя: {isMobile ? getShortName(parent.name) : parent.name}
      </p>
      <p className={baseStyles.modalText}>
        ФИО ребёнка:{' '}
        <span
          className={cn(baseStyles.modalText, {
            [styles.parentsDataEmpty]: !parent.child,
          })}
        >
          {parent.child
            ? isMobile
              ? getShortName(getFullName(parent.child))
              : getShortName(getFullName(parent.child))
            : 'ребёнок не закреплён'}
        </span>
      </p>
      <div className={baseStyles.inputGroup}>
        <select
          className={cn(baseStyles.formInput, styles.parentsModalInput)}
          aria-label="Children select"
          defaultValue={parent.child?.id ? parent.child?.id : ''}
          onChange={(evt) => {
            setSelectValue({
              ...selectValue,
              childId: evt.target.value,
              parentId: parent.id,
            });
          }}
        >
          <option value="">Выберите ребёнка</option>
          {children.map(
            (child) =>
              child && (
                <option key={child.id} value={child.id}>
                  {`${child.surname} ${child.name} ${child.patronymic}`}
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
          onClick={() => handleSelect(selectValue)}
        >
          Закрепить за родителем
        </button>
      </div>
      <p className={baseStyles.formError}>{errorText}</p>
    </Modal>
  );
}
