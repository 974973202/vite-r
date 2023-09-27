import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['box']}></div>
    </div>
  );
}

export default C1;
