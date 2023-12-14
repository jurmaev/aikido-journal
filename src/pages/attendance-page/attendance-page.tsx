import baseStyles from '../base.module.css';
import styles from './attendance.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import AttendanceTable from '../../components/attendance/attendance-table/attendance-table';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGroups } from '../../store/group-data/api-actions';
import { getGroups } from '../../store/group-data/group-data.selectors';

export default function AttendancePage() {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(getGroups);

  useEffect(() => {
    document.title = 'Посещаемость';
  }, []);

  useEffect(() => {
    if (groups.length === 0) {
      dispatch(fetchGroups());
    }
  }, [dispatch, groups]);

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
