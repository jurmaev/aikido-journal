import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';

type GroupNameProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
};

export default function GroupName({
  name,
  value,
  onChange,
  isValid,
}: GroupNameProps) {
  return (
    <div className={styles.groupsModalInputContainer}>
      <label
        htmlFor={`group-${name}`}
        className={cn(baseStyles.modalText, styles.groupsModalText)}
      >
        Название группы:
      </label>
      <input
        id={`group-${name}`}
        type="text"
        className={
          cn(styles.groupsModalInput, { [baseStyles.formInputError]: !isValid })
        }
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
