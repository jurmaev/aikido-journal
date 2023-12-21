import { TrainingTime } from '../../../types/group';
import styles from '../../../pages/parent-schedule-page/parent-schedule.module.css';

type TableCellProps = {
  time: TrainingTime | null;
};

export default function TableCell({ time }: TableCellProps) {
  return (
    <td className={styles.tableCell}>
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
