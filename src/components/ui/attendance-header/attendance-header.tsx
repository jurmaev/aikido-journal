import { Days } from '../../../const';
import styles from '../../../pages/attendance-page/attendance.module.css';
import { ScheduleDay } from '../../../types/group';
import cn from 'classnames';
import {
  addZero,
  getNextMonday,
  getStartDateString,
} from '../../../utils/datetime';

type AttendanceHeaderProps = {
  day: ScheduleDay;
  canEdit: boolean;
};

export default function AttendanceHeader({
  day,
  canEdit,
}: AttendanceHeaderProps) {
  const date = new Date(day.date);
  const currentDate = new Date();
  const weekEndDate = getNextMonday(new Date());
  weekEndDate.setDate(weekEndDate.getDate() - 1);

  return (
    <th
      className={cn(styles.tableHeader, {
        [styles.tableHeaderInactive]:
          getStartDateString(date) > getStartDateString(weekEndDate) ||
          (date < currentDate &&
            getStartDateString(date) !== getStartDateString(currentDate) &&
            !canEdit),
      })}
    >
      <div>{`${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}`}</div>
      <div>{Days[date.getDay()]}</div>
    </th>
  );
}
