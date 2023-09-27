import styles from './index.module.scss';

function C1() {
  const mapArr = new Array(100).fill(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['g-container']}>
        <ul className={styles['box']}>
          <li>Lorem ipsum 1111111</li>
          <li>Lorem ipsum 2222222</li>
          <li>Lorem ipsum 3333333</li>
          <li>Lorem ipsum 4444444</li>
          <li>Lorem ipsum 5555555</li>
          <li>Lorem ipsum 6666666</li>
          <li>Lorem ipsum 1111111</li>
        </ul>
      </div>
      <div className={styles['g-container1']}>
        <ul className={styles['box1']}>
          <li>Lorem ipsum 1111111</li>
          <li>Lorem ipsum 2222222</li>
          <li>Lorem ipsum 3333333</li>
          <li>Lorem ipsum 4444444</li>
          <li>Lorem ipsum 5555555</li>
          <li>Lorem ipsum 6666666</li>
          <li>Lorem ipsum 1111111</li>
        </ul>
      </div>
    </div>
  );
}

export default C1;
