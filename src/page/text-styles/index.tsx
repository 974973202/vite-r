import ColorAnimateTextComponent from './color-animate-text';
import './index.less';

function TextStyles() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '90vh',
        filter: 'contrast(30)',
      }}
    >
      <ColorAnimateTextComponent
        prefixString={'正在加载中...：'}
        texts={['努力加载中...', '真的在加载了...']}
      />
      <br />
      <div className="text">123333</div>
    </div>
  );
}

export default TextStyles;
