import baseStyles from '../base.module.css';
import styles from './parent-attendance.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { getFullName, getShortName } from '../../utils/names';
import AttendanceHeader from '../../components/ui/attendance-header/attendance-header';
import TableCell from '../../components/parent-attendance/table-cell/table-cell';
import AttendanceSelect from '../../components/parent-attendance/attendance-select/attendance-select';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getChildrenAttendance } from '../../store/parent-data/parent-data.selectors';
import { fetchChildrenAttendance } from '../../store/parent-data/api-actions';
import {
  getMonday,
  getNextMonday,
  getPreviosMonday,
} from '../../utils/datetime';

export default function ParentAttendancePage() {
  const isMobile = useIsMobile();
  const attendance = useAppSelector(getChildrenAttendance);
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState(getMonday(new Date()));

  useEffect(() => {
    dispatch(fetchChildrenAttendance(startDate));
  }, [dispatch, startDate]);

  useEffect(() => {
    document.title = 'Посещаемость';
  }, []);

  return (
    <>
      <Header />
      <main>
        <div
          className={cn(baseStyles.container, styles.parentAttendanceContainer)}
        >
          <h1 className={styles.parentAttendanceTitle}>Посещаемость</h1>

          {attendance.length === 1 && !attendance[0] ? (
            <p className={baseStyles.redText}>
              ребенок закреплен, но не добавлен в группу
            </p>
          ) : attendance.length !== 0 ? (
            <>
              <AttendanceSelect setStartDate={setStartDate} />
              {attendance.map((child, index) => {
                if (child.attendance) {
                  return (
                    <table key={index}>
                      <thead>
                        <tr>
                          <th className={styles.tableHeader}>
                            <div className={styles.tableHeaderContainer}>
                              ФИО ребенка:
                              <button
                                className={styles.tableArrow}
                                aria-label="Previos week"
                                onClick={() =>
                                  setStartDate(getPreviosMonday(startDate))
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="19"
                                  viewBox="0 0 10 19"
                                  fill="none"
                                >
                                  <path
                                    d="M9.5 1L1 9.5L9.5 18"
                                    stroke="black"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                              <button
                                className={styles.tableArrow}
                                aria-label="Next week"
                                onClick={() =>
                                  setStartDate(getNextMonday(startDate))
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11"
                                  height="19"
                                  viewBox="0 0 11 19"
                                  fill="none"
                                >
                                  <path
                                    d="M1 18L9.5 9.5L1 1"
                                    stroke="black"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </th>
                          {child.schedule.map((day) =>
                            isMobile ? (
                              day.is_training && (
                                <AttendanceHeader key={day.date} day={day} />
                              )
                            ) : (
                              <AttendanceHeader key={day.date} day={day} />
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={child.id}>
                          <td className={styles.tableCell}>
                            {isMobile
                              ? getShortName(getFullName(child))
                              : getFullName(child)}
                          </td>
                          {child.attendance.map((day) =>
                            isMobile ? (
                              day.is_training !== null && (
                                <TableCell
                                  key={day.date}
                                  isTraining={day.is_training}
                                />
                              )
                            ) : (
                              <TableCell
                                key={day.date}
                                isTraining={day.is_training}
                              />
                            )
                          )}
                        </tr>
                      </tbody>
                    </table>
                  );
                }
              })}
            </>
          ) : (
            <p className={baseStyles.redText}>ребенок не закреплен</p>
          )}
        </div>
      </main>
    </>
  );
}
