import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';

type GroupPriceProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
};

export default function GroupPrice({
  name,
  value,
  onChange,
  isValid,
}: GroupPriceProps) {
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
        className={cn(styles.groupsModalInput, {
          [baseStyles.formInputError]: !isValid,
        })}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
