import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <ul className={styles['box']}>
        {mapArr.map((ele, index) => (
          <li key={index} className={styles['li']}></li>
        ))}
      </ul>
    </div>
  );
}

export default C1;
