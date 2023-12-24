import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { getFullName } from '../../../utils/names';
import { Child } from '../../../types/children';
import { createPortal } from 'react-dom';

type DeleteChildModalProps = {
  child: Child;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (id: number) => void;
};

export default function DeleteChildModal({
  child,
  isActive,
  setIsActive,
  handleDelete,
}: DeleteChildModalProps) {
  return createPortal(
    <Modal isActive={isActive} isCentral onClose={() => setIsActive(false)}>
      <h2 className={baseStyles.modalTitle}>
        Вы действительно хотите удалить ребенка?
      </h2>
      <p className={baseStyles.modalText}>ФИО: {getFullName(child)}</p>
      <div className={baseStyles.inputGroup}>
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          aria-label="Удалить"
          onClick={() => handleDelete(child.id)}
        >
          Удалить
        </button>
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          aria-label="Отменить"
          onClick={() => setIsActive(false)}
        >
          Отменить
        </button>
      </div>
    </Modal>,
    document.body
  );
}
