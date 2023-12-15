import { Days } from '../../../const';
import styles from '../../../pages/attendance-page/attendance.module.css';
import { ScheduleDay } from '../../../types/group';
import cn from 'classnames';
import { addZero } from '../../../utils/datetime';

type AttendanceHeaderProps = {
  day: ScheduleDay;
};

export default function AttendanceHeader({ day }: AttendanceHeaderProps) {
  const currentDate = new Date(day.date);

  return (
    <th
      key={day.date}
      className={cn(styles.tableHeader, {
        [styles.tableHeaderInactive]: !day.is_training,
      })}
    >
      <div>{`${addZero(currentDate.getDate())}.${addZero(
        currentDate.getMonth() + 1
      )}`}</div>
      <div>{Days[currentDate.getDay()]}</div>
    </th>
  );
}
