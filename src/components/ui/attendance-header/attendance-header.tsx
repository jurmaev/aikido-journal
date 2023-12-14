import { Days } from '../../../const';
import styles from '../../../pages/attendance-page/attendance.module.css';
import { ScheduleDay } from '../../../types/group';
import cn from 'classnames';

type AttendanceHeaderProps = {
  day: ScheduleDay;
};

export default function AttendanceHeader({ day }: AttendanceHeaderProps) {
  return (
    <th
      key={day.date}
      className={cn(styles.tableHeader, {
        [styles.tableHeaderInactive]: !day.is_training,
      })}
    >
      <div>{`${new Date(day.date).getDate()}.${new Date(
        day.date
      ).getMonth() + 1}`}</div>
      <div>{Days[new Date(day.date).getDay()]}</div>
    </th>
  );
}
