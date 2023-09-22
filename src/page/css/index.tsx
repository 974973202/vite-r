import styles from './index.module.less';

function Css() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <p>liangzx</p>
      <div className={styles['card']}>
        {mapArr.map((ele, index) => (
          <div key={index} className={styles['snow']}></div>
        ))}
      </div>
    </div>
  );
}

export default Css;
