import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';

type ExitGroupModalProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveGroupModal: React.Dispatch<React.SetStateAction<string>>;
  onExit: () => void;
};

export default function ExitGroupModal({
  isActive,
  setIsActive,
  setActiveGroupModal,
  onExit,
}: ExitGroupModalProps) {
  function handleExit() {
    setIsActive(false);
    setActiveGroupModal('');
    onExit();
  }

  return (
    <Modal isActive={isActive} isCentral onClose={() => setIsActive(false)}>
      <h2 className={baseStyles.modalTitle}>
        Изменения не сохранены. Вы действительно хотите выйти?
      </h2>
      <div className={baseStyles.inputGroup}>
        <button
          className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
          onClick={handleExit}
        >
          Выйти
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
