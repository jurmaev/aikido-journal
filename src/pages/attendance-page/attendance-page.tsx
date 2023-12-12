import baseStyles from '../base.module.css';
import styles from './attendance.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import AttendanceTable from '../../components/attendance/attendance-table/attendance-table';

export default function AttendancePage() {
  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.attendanceContainer)}>
          <h1 className={styles.attendanceTitle}>Посещаемость</h1>

          <AttendanceTable />
        </div>
      </main>
    </>
  );
}
