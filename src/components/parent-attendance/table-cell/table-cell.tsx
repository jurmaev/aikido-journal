import styles from '../../../pages/parent-attendance-page/parent-attendance.module.css';
import cn from 'classnames';

type TableCellProps = {
  date: string;
  isTraining: boolean | null;
};

export default function TableCell({ date, isTraining }: TableCellProps) {
  return (
    <td key={date} className={styles.tableCell}>
      <div className={styles.tableCellContainer}>
        <div
          className={cn(
            styles.tableCheck,
            { [styles.tableCheckChecked]: isTraining },
            {
              [styles.tableCheckDisabled]: isTraining === null,
            },
            {
              [styles.tableCross]: isTraining !== null && !isTraining,
            }
          )}
        >
          {isTraining !== null && !isTraining ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M18.6666 9.3335L9.33325 18.6668"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33325 9.3335L18.6666 18.6668"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
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
          )}
        </div>
      </div>
    </td>
  );
}
