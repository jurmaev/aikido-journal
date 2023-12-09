import { TrainingTime } from '../../../types/group';
import styles from '../../../pages/parent-schedule-page/parent-schedule.module.css';

type TableCellProps = {
  day: string;
  time: TrainingTime | null;
};

export default function TableCell({ day, time }: TableCellProps) {
  return (
    <td key={day} className={styles.tableCell}>
      <div className={styles.tableCellContainer}>
        {time && (
          <div className={styles.tableTime}>
            {time.start} - {time.end}
          </div>
        )}
      </div>
    </td>
  );
}
