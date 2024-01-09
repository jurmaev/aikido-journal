import styles from '../../../pages/parent-attendance-page/parent-attendance.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import { Months } from '../../../const';
import { useState } from 'react';
import { getFirstMondayOfMonth } from '../../../utils/datetime';

type AttendanceSelectProps = {
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
};

export default function AttendanceSelect({
  setStartDate,
}: AttendanceSelectProps) {
  const [month, setMonth] = useState(-1);

  return (
    <div
      className={cn(baseStyles.inputGroup, styles.parentAttendanceInputGroup)}
    >
      <select
        name="month"
        id="month"
        className={styles.parentAttendanceSelect}
        aria-label="Select month"
        value={month}
        onChange={(evt) => {
          setMonth(Number(evt.target.value));
        }}
      >
        <option value="-1">Выберите месяц</option>
        {Months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
      <button
        className={cn(baseStyles.btn, baseStyles.btnBlue, baseStyles.btnLarge)}
        onClick={() => {
          if (month !== -1) {
            setStartDate(getFirstMondayOfMonth(month));
          }
        }}
      >
        Применить
      </button>
    </div>
  );
}
