import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import { Parent } from '../../../types/parents';
import { getHighlightedParentName } from '../../../utils/highlight';
import { getFullName, getShortName } from '../../../utils/names';

type ParentsRowProps = {
  parent: Parent;
  highlightedValue: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function ParentsRow({
  parent,
  highlightedValue,
  setActiveModal,
}: ParentsRowProps) {
  const isMobile = window.innerWidth < 1024;

  return (
    <>
      <tr>
        <td className={styles.parentsData}>
          <div className={styles.parentsDataContainer}>
            <p>
              {getHighlightedParentName(
                parent.name,
                isMobile,
                highlightedValue
              )}
            </p>
            <button
              className={cn(baseStyles.btn, styles.parentsBtn)}
              aria-label="Info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16H12.01"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={styles.tooltip}>
                <a href={`tel:${parent.phone}`}>{parent.phone}</a>
              </div>
            </button>
          </div>
        </td>
        <td
          className={cn(styles.parentsData, {
            [styles.parentsDataEmpty]: !parent.child,
          })}
        >
          <div className={styles.parentsDataContainer}>
            {parent.child
              ? isMobile
                ? getShortName(getFullName(parent.child))
                : getFullName(parent.child)
              : 'ребёнок не закреплён'}
            <button
              className={cn(baseStyles.btn, styles.parentsBtn)}
              aria-label="Edit"
              onClick={() => setActiveModal(parent.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9403 20H20.8061"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
