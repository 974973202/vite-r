import ColorAnimateTextComponent from './color-animate-text';

function TextStyles() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <ColorAnimateTextComponent
        prefixString={'中证数智：'}
        texts={['吴老师', '全栈工程师']}
      />
    </div>
  );
}

export default TextStyles;
