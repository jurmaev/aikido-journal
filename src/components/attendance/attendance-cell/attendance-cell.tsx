import { GroupAttendance, ScheduleDay } from '../../../types/group';
import styles from '../../../pages/attendance-page/attendance.module.css';
import cn from 'classnames';
import { produce } from 'immer';

type AttendanceCellProps = {
  childId: number;
  day: ScheduleDay;
  setAttendanceState: React.Dispatch<
    React.SetStateAction<GroupAttendance | null>
  >;
};

export default function AttendanceCell({
  childId,
  day,
  setAttendanceState,
}: AttendanceCellProps) {
  const date = new Date(day.date);
  const currentDate = new Date();
  return (
    <td key={day.date} className={styles.tableCell}>
      <button
        className={cn(styles.tableCheck, {
          [styles.tableCheckChecked]: day.is_training,
          // [styles.tableCheckEmpty]: date.getDate() > currentDate.getDate(),
        })}
        aria-label="Check"
        disabled={date.getDate() > currentDate.getDate()}
        onClick={() =>
          setAttendanceState(
            produce((draft) => {
              const foundDay = draft?.children_attendance
                .find((child) => child.id === childId)
                ?.attendance.find((attDay) => attDay.date === day.date);
              if (foundDay) {
                foundDay.is_training = !day.is_training;
              }
            })
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M15 4.5L6.75 12.75L3 9"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </td>
  );
}
