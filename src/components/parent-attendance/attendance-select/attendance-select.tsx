import styles from '../../../pages/parent-attendance-page/parent-attendance.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';

export default function AttendanceSelect() {
  return (
    <div
      className={cn(baseStyles.inputGroup, styles.parentAttendanceInputGroup)}
    >
      <select
        name="month"
        id="month"
        className={styles.parentAttendanceSelect}
        aria-label="Month select"
      >
        <option value="">Выберите месяц</option>
      </select>
      <button
        className={cn(baseStyles.btn, baseStyles.btnBlue, baseStyles.btnLarge)}
      >
        Применить
      </button>
    </div>
  );
}
