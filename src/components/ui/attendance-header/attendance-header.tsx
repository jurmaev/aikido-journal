import { Days } from '../../../const';
import styles from '../../../pages/attendance-page/attendance.module.css';
import { ScheduleDay } from '../../../types/group';
import cn from 'classnames';
import { addZero } from '../../../utils/datetime';

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

  return (
    <th
      className={cn(styles.tableHeader, {
        [styles.tableHeaderInactive]:
          currentDate.getDate() + 6 < date.getDate() ||
          (currentDate.getDate() > date.getDate() && canEdit),
      })}
    >
      <div>{`${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}`}</div>
      <div>{Days[date.getDay()]}</div>
    </th>
  );
}
