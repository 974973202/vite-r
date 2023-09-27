import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['g-container']}>
        <div className={styles['g-group']}>
          <div className={`${styles.item} ${styles['item-right']}`}></div>
          <div className={`${styles.item} ${styles['item-left']}`}></div>
          <div className={`${styles.item} ${styles['item-top']}`}></div>
          <div className={`${styles.item} ${styles['item-bottom']}`}></div>
          <div className={`${styles.item} ${styles['item-middle']}`}></div>
        </div>
        <div className={styles['g-group']}>
          <div className={`${styles.item} ${styles['item-right']}`}></div>
          <div className={`${styles.item} ${styles['item-left']}`}></div>
          <div className={`${styles.item} ${styles['item-top']}`}></div>
          <div className={`${styles.item} ${styles['item-bottom']}`}></div>
          <div className={`${styles.item} ${styles['item-middle']}`}></div>
        </div>
      </div>
    </div>
  );
}

export default C1;
