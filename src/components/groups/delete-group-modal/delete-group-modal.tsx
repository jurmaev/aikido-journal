import Modal from '../../ui/modal/modal';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';

type DeleteGroupModalProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
  onDelete: () => void;
};

export default function DeleteGroupModal({
  isActive,
  setIsActive,
  setActiveGroupModal,
  onDelete,
}: DeleteGroupModalProps) {
  return (
    <Modal isActive={isActive} isCentral onClose={() => setIsActive(false)}>
      <h2 className={baseStyles.modalTitle}>
        Вы действительно хотите удалить группу?
      </h2>
      <div className={baseStyles.inputGroup}>
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          onClick={() => {
            setIsActive(false);
            setActiveGroupModal('');
            onDelete();
          }}
        >
          Удалить
        </button>
        <button
          className={cn(
            baseStyles.btn,
            baseStyles.btnBlue,
            baseStyles.btnLarge
          )}
          onClick={() => setIsActive(false)}
        >
          Отмена
        </button>
      </div>
    </Modal>
  );
}
