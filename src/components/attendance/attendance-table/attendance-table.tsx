import AttendanceSelect from '../attendance-select/attendance-select';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/attendance-page/attendance.module.css';
import cn from 'classnames';
import { getShortName } from '../../../utils/names';
import { produce } from 'immer';
import { attendance } from '../../../mocks/attendance';
import { useState } from 'react';
import AttendanceHeader from '../../attendance-header/attendance-header';

export default function AttendanceTable() {
  const isMobile = window.innerWidth < 1024;
  const currentAttendance = attendance[0];
  const [attendanceState, setAttendanceState] = useState(currentAttendance);

  function getCell(
    childId: string,
    day: { date: string; isTraining: boolean | null }
  ) {
    return (
      <td key={day.date} className={styles.tableCell}>
        <button
          className={cn(styles.tableCheck, {
            [styles.tableCheckChecked]: day.isTraining,
          })}
          aria-label="Check"
          disabled={day.isTraining === null}
          onClick={() =>
            setAttendanceState(
              produce((draft) => {
                const foundDay = draft.children
                  .find((child) => child.id === childId)
                  ?.attendance.find((attDay) => attDay.date === day.date);
                if (foundDay) {
                  foundDay.isTraining = !day.isTraining;
                }
              })
            )
          }
        >
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
        </button>
      </td>
    );
  }

  return (
    <>
      <AttendanceSelect />

      <table>
        <thead>
          <tr>
            <th className={styles.tableHeader}>
              <div className={styles.tableHeaderContainer}>
                ФИО ребенка:
                <button
                  className={styles.tableArrow}
                  aria-label="Previous week"
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
                <button className={styles.tableArrow} aria-label="Next week">
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
            {attendanceState.schedule.map((day) =>
              isMobile ? (
                day.isTraining && <AttendanceHeader day={day} />
              ) : (
                <AttendanceHeader day={day} />
              )
            )}
          </tr>
        </thead>
        <tbody>
          {attendanceState.children.map((child) => (
            <tr key={child.id}>
              <td className={styles.tableCell}>
                {isMobile ? getShortName(child.name) : child.name}
              </td>
              {child.attendance.map((day) =>
                isMobile
                  ? day.isTraining !== null && getCell(child.id, day)
                  : getCell(child.id, day)
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className={cn(baseStyles.btn, baseStyles.btnRed, baseStyles.btnLarge)}
        aria-label="Сохранить изменения"
      >
        Сохранить изменения
      </button>
    </>
  );
}
