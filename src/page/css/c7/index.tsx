import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['g-container']}>
      <div className={styles['g-word']}>华为</div>
      <div className={styles['g-word']}>Mate 60</div>
      <div className={styles['g-word']}>Pro</div>
      <div className={styles['g-word']}>遥遥领先</div>
    </div>
  );
}

export default C1;
