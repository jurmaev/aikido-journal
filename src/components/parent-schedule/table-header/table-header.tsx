import styles from '../../../pages/parent-schedule-page/parent-schedule.module.css';

type TableHeaderProps = {
  day: string;
  index: number;
};

export default function TableHeader({ day, index }: TableHeaderProps) {
  return (
    <th key={index} className={styles.tableHeader}>
      {day}
    </th>
  );
}
