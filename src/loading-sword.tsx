import styles from './loading-sword.module.scss';

function LoadingSword() {
  return (
    <div className={styles['loading-sword']}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default LoadingSword;
