import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(50).fill(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['picA']}>
        <div className={styles['picB']}>
          <div className={styles['resizeElement']}></div>
        </div>
      </div>
    </div>
  );
}

export default C1;
