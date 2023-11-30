import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/attendance-page/attendance.module.css';
import cn from 'classnames';
import { attendance } from '../../../mocks/attendance';

export default function AttendanceSelect() {
  const groups = attendance.map((groupAttendance) => {
    return { id: groupAttendance.id, name: groupAttendance.name };
  });

  return (
    <div className={cn(baseStyles.inputGroup, styles.attendanceInputGroup)}>
      <select
        name="group"
        id="group"
        className={cn(baseStyles.formInput, styles.attendanceSelect)}
        aria-label="Select group"
      >
        <option value="">Выберите группу</option>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
      <select
        name="month"
        id="month"
        className={cn(baseStyles.formInput, styles.attendanceSelect)}
        aria-label="Select month"
      >
        <option value="">Выберите месяц</option>
      </select>
    </div>
  );
}
