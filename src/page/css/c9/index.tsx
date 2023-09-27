import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['g-container']}>
        <svg className={styles['g-svg']} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160"
            className={styles['line']}
          />
        </svg>
        <svg className={styles['g-svg']} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160"
            className={`${styles['line']} ${styles['line2']}`}
          />
        </svg>
      </div>
    </div>
  );
}

export default C1;
