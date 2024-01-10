import baseStyles from '../base.module.css';
import styles from './parent-attendance.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { getFullName, getShortName } from '../../utils/names';
import TableCell from '../../components/parent-attendance/table-cell/table-cell';
import AttendanceSelect from '../../components/parent-attendance/attendance-select/attendance-select';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getChildrenAttendance } from '../../store/parent-data/parent-data.selectors';
import {
  fetchChildrenAttendance,
  fetchChildrenAttendanceForMonth,
} from '../../store/parent-data/api-actions';
import {
  addZero,
  getMonday,
  getNextMonday,
  getPreviosMonday,
  getStartDateString,
} from '../../utils/datetime';
import { Days } from '../../const';

export default function ParentAttendancePage() {
  const isMobile = useIsMobile();
  const attendance = useAppSelector(getChildrenAttendance);
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState(getMonday(new Date()));
  console.log(isMobile)

  useEffect(() => {
    if (!isMobile) {
      dispatch(
        fetchChildrenAttendanceForMonth({
          year: startDate.getFullYear(),
          month: startDate.getMonth() + 1,
        })
      );
    } else {
      dispatch(fetchChildrenAttendance(getStartDateString(startDate)));
    }
  }, [dispatch, startDate, isMobile]);

  useEffect(() => {
    document.title = 'Посещаемость';
  }, []);

  function handlePreviousButtonClick() {
    if (!isMobile) {
      const newDate = new Date(startDate);
      newDate.setMonth(newDate.getMonth() - 1);
      setStartDate(newDate);
    } else {
      setStartDate(getPreviosMonday(startDate));
    }
  }

  function handleNextButtonClick() {
    if (!isMobile) {
      const newDate = new Date(startDate);
      newDate.setMonth(newDate.getMonth() + 1);
      setStartDate(newDate);
    } else {
      setStartDate(getNextMonday(startDate));
    }
  }

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
                const hasSchedule =
                  !child.attendance ||
                  child.schedule?.some((day) => day.is_training);

                if (!hasSchedule) {
                  return (
                    <p className={baseStyles.text}>
                      {getFullName(child) + ': '}
                      <span className={baseStyles.redText}>
                        расписание группы не задано
                      </span>
                    </p>
                  );
                } else if (child.attendance) {
                  return (
                    <table key={index}>
                      <thead>
                        <tr>
                          <th className={styles.tableHeader}>
                            <div className={styles.tableHeaderContainer}>
                              ФИО ребенка:
                              <button
                                className={styles.tableArrow}
                                aria-label="Previos"
                                onClick={handlePreviousButtonClick}
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
                                aria-label="Next"
                                onClick={handleNextButtonClick}
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
                          {child.schedule.map(
                            (day) =>
                              day.is_training && (
                                <th
                                  className={cn(styles.tableHeader, {
                                    [styles.tableHeaderInactive]:
                                      new Date(day.date) > new Date(),
                                  })}
                                  key={day.date}
                                >
                                  <div>{`${addZero(
                                    new Date(day.date).getDate()
                                  )}.${addZero(
                                    new Date(day.date).getMonth() + 1
                                  )}`}</div>
                                  <div>{Days[new Date(day.date).getDay()]}</div>
                                </th>
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
                          {child.attendance.map(
                            (day) =>
                              day.is_training !== null && (
                                <TableCell
                                  key={day.date}
                                  date={day.date}
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
            <p className={baseStyles.text}>
              Ребенок: <span className={baseStyles.redText}>не закреплен</span>
            </p>
          )}
        </div>
      </main>
    </>
  );
}
