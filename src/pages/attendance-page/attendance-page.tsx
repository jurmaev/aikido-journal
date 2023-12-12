import baseStyles from '../base.module.css';
import styles from './attendance.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import AttendanceTable from '../../components/attendance/attendance-table/attendance-table';
import { useEffect } from 'react';

export default function AttendancePage() {
  useEffect(() => {
    document.title = 'Посещаемость';
  }, []);
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
