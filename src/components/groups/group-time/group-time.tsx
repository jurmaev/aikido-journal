import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { TrainingTime } from '../../../types/group';

type GroupTimeProps = {
  day: TrainingTime | null;
  index: number;
  handleCheckClick: (day: TrainingTime | null, index: number) => void;
  handleStartTimeChange: (
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleEndTimeChange: (
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
};

export default function GroupTime({
  day,
  index,
  handleCheckClick,
  handleEndTimeChange,
  handleStartTimeChange,
}: GroupTimeProps) {
  return (
    <td className={styles.tableCell}>
      <div className={styles.tableCellContainer}>
        <button
          className={cn(styles.tableCheck, {
            [styles.tableCheckActive]: day,
          })}
          aria-label="Check"
          onClick={() => handleCheckClick(day, index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          type="time"
          className={styles.tableInput}
          placeholder="Время начала"
          value={day ? day?.start : ''}
          onChange={(evt) => handleStartTimeChange(evt, index)}
        />
        <input
          type="time"
          className={styles.tableInput}
          placeholder="Время окончания"
          value={day ? day?.end : ''}
          onChange={(evt) => handleEndTimeChange(evt, index)}
        />
      </div>
    </td>
  );
}
