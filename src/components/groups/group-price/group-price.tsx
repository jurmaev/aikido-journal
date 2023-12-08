import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';

type GroupPriceProps = {
  name: string;
  value: number | undefined;
  onChange: (value: number) => void;
};

export default function GroupPrice({ name, value, onChange }: GroupPriceProps) {
  return (
    <div className={styles.groupsModalInputContainer}>
      <label
        htmlFor={`cost-${name}`}
        className={cn(baseStyles.modalText, styles.groupsModalText)}
      >
        Цена за занятие в ₽:
      </label>
      <input
        id={`cost-${name}`}
        type="number"
        className={styles.groupsModalInput}
        value={value}
        onChange={(evt) => onChange(Number(evt.target.value))}
      />
    </div>
  );
}
