import baseStyles from '../base.module.css';
import styles from './parent-attendance.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';
import { parentAttendance } from '../../mocks/parent-attendance';
import { getShortName } from '../../utils/names';
import AttendanceHeader from '../../components/attendance-header/attendance-header';

function getCell(day: { date: string; isTraining: boolean | null }) {
  return (
    <td key={day.date} className={styles.tableCell}>
      <div className={styles.tableCellContainer}>
        <div
          className={cn(
            styles.tableCheck,
            { [styles.tableCheckChecked]: day.isTraining },
            {
              [styles.tableCheckDisabled]: day.isTraining === null,
            },
            {
              [styles.tableCross]: day.isTraining !== null && !day.isTraining,
            }
          )}
        >
          {day.isTraining !== null && !day.isTraining ? (
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

export default function ParentAttendancePage() {
  const isMobile = window.innerWidth < 1024;

  return (
    <>
      <Header navItems={NavItems.Parent} />
      <main>
        <div
          className={cn(baseStyles.container, styles.parentAttendanceContainer)}
        >
          <h1 className={styles.parentAttendanceTitle}>Посещаемость</h1>
          <div
            className={cn(
              baseStyles.inputGroup,
              styles.parentAttendanceInputGroup
            )}
          >
            <select
              name="month"
              id="month"
              className={styles.parentAttendanceSelect}
              aria-label="Month select"
            >
              <option value="">Выберите месяц</option>
            </select>
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnBlue,
                baseStyles.btnLarge
              )}
            >
              Применить
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>
                  <div className={styles.tableHeaderContainer}>
                    ФИО ребенка:
                    <button
                      className={styles.tableArrow}
                      aria-label="Previos week"
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
                {parentAttendance.schedule.map((day) =>
                  isMobile ? (
                    day.isTraining && <AttendanceHeader day={day} />
                  ) : (
                    <AttendanceHeader day={day} />
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {parentAttendance.children.map((child) => (
                <tr key={child.id}>
                  <td className={styles.tableCell}>
                    {isMobile ? getShortName(child.name) : child.name}
                  </td>
                  {child.attendance.map((day) =>
                    isMobile
                      ? day.isTraining !== null && getCell(day)
                      : getCell(day)
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
