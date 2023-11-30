import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';

type GroupPriceProps = {
  id: string;
  value: number;
  onChange: (value: number) => void;
};

export default function GroupPrice({ id, value, onChange }: GroupPriceProps) {
  return (
    <div className={styles.groupsModalInputContainer}>
      <label
        htmlFor={`cost-${id}`}
        className={cn(baseStyles.modalText, styles.groupsModalText)}
      >
        Цена за занятие в ₽:
      </label>
      <input
        id={`cost-${id}`}
        type="number"
        className={styles.groupsModalInput}
        value={value}
        onChange={(evt) => onChange(Number(evt.target.value))}
      />
    </div>
  );
}
