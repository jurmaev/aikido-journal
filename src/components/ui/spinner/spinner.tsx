import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className="container">
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
