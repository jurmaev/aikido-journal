import baseStyles from '../base.module.css';
import styles from './parent-attendance.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { parentAttendance } from '../../mocks/parent-attendance';
import { getShortName } from '../../utils/names';
import AttendanceHeader from '../../components/ui/attendance-header/attendance-header';
import TableCell from '../../components/parent-attendance/table-cell/table-cell';
import AttendanceSelect from '../../components/parent-attendance/attendance-select/attendance-select';
import { useIsMobile } from '../../hooks/use-is-mobile';

export default function ParentAttendancePage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main>
        <div
          className={cn(baseStyles.container, styles.parentAttendanceContainer)}
        >
          <h1 className={styles.parentAttendanceTitle}>Посещаемость</h1>

          <AttendanceSelect />

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
                    day.isTraining && (
                      <AttendanceHeader key={day.date} day={day} />
                    )
                  ) : (
                    <AttendanceHeader key={day.date} day={day} />
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
                    isMobile ? (
                      day.isTraining !== null && (
                        <TableCell
                          key={day.date}
                          date={day.date}
                          isTraining={day.isTraining}
                        />
                      )
                    ) : (
                      <TableCell
                        key={day.date}
                        date={day.date}
                        isTraining={day.isTraining}
                      />
                    )
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
