import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/attendance-page/attendance.module.css';
import cn from 'classnames';
import { useAppSelector } from '../../../hooks';
import { getGroups } from '../../../store/group-data/group-data.selectors';
import { Months } from '../../../const';
import { getFirstMondayOfMonth } from '../../../utils/datetime';

type AttendanceSelectProps = {
  groupName: string;
  setGroupName: React.Dispatch<React.SetStateAction<string>>;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
};

export default function AttendanceSelect({
  groupName,
  setGroupName,
  month,
  setMonth,
  setStartDate,
}: AttendanceSelectProps) {
  const groupNames = useAppSelector(getGroups).map((group) => group.name);

  return (
    <div className={cn(baseStyles.inputGroup, styles.attendanceInputGroup)}>
      <select
        name="group"
        id="group"
        className={cn(baseStyles.formInput, styles.attendanceSelect)}
        aria-label="Select group"
        value={groupName}
        onChange={(evt) => setGroupName(evt.target.value)}
      >
        <option value="">Выберите группу</option>
        {groupNames.map((groupName) => (
          <option key={groupName} value={groupName}>
            {groupName}
          </option>
        ))}
      </select>
      <select
        name="month"
        id="month"
        className={cn(baseStyles.formInput, styles.attendanceSelect)}
        aria-label="Select month"
        value={month}
        onChange={(evt) => {
          const selectedMonth = Number(evt.target.value);
          setMonth(selectedMonth);
          if (selectedMonth !== -1) {
            setStartDate(getFirstMondayOfMonth(selectedMonth));
          }
        }}
      >
        <option value="-1">Выберите месяц</option>
        {Months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}
