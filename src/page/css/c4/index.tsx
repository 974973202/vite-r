import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['A']}>
          <img src="https://picsum.photos/1200/1200?random=1" alt="" />
        </div>
        <div className={styles['B']}>
          <img src="https://picsum.photos/1200/1200?random=2" alt="" />
        </div>
        <div className={styles['C']}>
          <img src="https://picsum.photos/1200/1200?random=3" alt="" />
        </div>
        <div className={styles['D']}>
          <img src="https://picsum.photos/1200/1200?random=4" alt="" />
        </div>
        <div className={styles['E']}>
          <img src="https://picsum.photos/1200/1200?random=5" alt="" />
        </div>
      </div>
    </div>
  );
}

export default C1;
